import React, { useState } from "react";
import * as XLSX from "xlsx";

const RegistrationSearch = () => {
    const [dob, setDob] = useState("");
    const [matchingRecords, setMatchingRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearchByDOB = async () => {
        // Reset previous results
        setMatchingRecords([]);
        setSelectedRecord(null);
        setError("");

        // Validate input
        if (!dob.trim()) {
            setError("Please enter Date of Birth");
            return;
        }

        setLoading(true);

        try {
            // Load and parse both Excel files
            const boysData = await loadExcelFile("/assets/_BOYS LIST 2025 COMPETITION .xlsx");
            const girlsData = await loadExcelFile("/assets/GIRLS LIST 2025 COMPETITION.xlsx");

            // Combine both datasets
            const allData = [...boysData, ...girlsData];

            // Search for all records matching the DOB
            const results = searchByDOB(allData, dob.trim());

            if (results.length > 0) {
                setMatchingRecords(results);
            } else {
                setError("No registrations found for the provided Date of Birth. Please check the date format (DD/MM/YYYY).");
            }
        } catch (err) {
            console.error("Search error:", err);
            setError("An error occurred while searching. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const loadExcelFile = async (filePath) => {
        try {
            const response = await fetch(filePath);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });

            // Get the first sheet
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert to JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // The actual headers are on row 3 (index 2)
            const headers = jsonData[2];
            const dataStartRow = 4;

            const rows = jsonData.slice(dataStartRow);

            return rows
                .filter(row => row && row[0] && row[0].toString().startsWith('AIE-'))
                .map(row => {
                    const obj = {};
                    headers.forEach((header, index) => {
                        let value = row[index];

                        // Convert Excel serial date to DD/MM/YYYY format
                        if (header === 'DATE OF BIRTH' && typeof value === 'number') {
                            value = excelSerialToDate(value);
                        }

                        obj[header] = value;
                    });
                    return obj;
                });
        } catch (error) {
            console.error(`Error loading ${filePath}:`, error);
            return [];
        }
    };

    // Convert Excel serial date to DD/MM/YYYY
    const excelSerialToDate = (serial) => {
        const excelEpoch = new Date(1899, 11, 30);
        const days = Math.floor(serial);
        const date = new Date(excelEpoch.getTime() + days * 86400000);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const searchByDOB = (data, searchDob) => {
        const normalizedSearchDob = searchDob.trim();

        // Find all records matching the DOB
        return data.filter(record => {
            const recordDob = (
                record["DATE OF BIRTH"] ||
                record["DOB"] ||
                record["Date of Birth"] ||
                ""
            ).toString().trim();

            return recordDob === normalizedSearchDob;
        });
    };

    const getFieldValue = (record, possibleKeys) => {
        for (let key of possibleKeys) {
            if (record[key]) return record[key];
        }
        return "N/A";
    };

    const handleSelectRecord = (record) => {
        setSelectedRecord(record);
    };

    return (
        <div className="w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Search Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Date of Birth (DD/MM/YYYY) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="e.g., 30/09/2018"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2dad5c]"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearchByDOB();
                                }
                            }}
                        />
                    </div>

                    <button
                        onClick={handleSearchByDOB}
                        disabled={loading}
                        className={`w-full bg-[#2dad5c] text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-[#24954f] transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Searching..." : "Search by Date of Birth"}
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}

                {/* Matching Names List */}
                {matchingRecords.length > 0 && !selectedRecord && (
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-[#2dad5c] mb-3">
                            Found {matchingRecords.length} registration(s) for this date of birth:
                        </h3>
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {matchingRecords.map((record, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectRecord(record)}
                                    className="w-full text-left p-4 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg transition-colors"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {getFieldValue(record, ["NAMES", "NAME", "Name"])}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {getFieldValue(record, ["REGISTER NO", "REGISTRATION NO"])}
                                            </p>
                                        </div>
                                        <svg className="w-5 h-5 text-[#2dad5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Selected Record Details */}
                {selectedRecord && (
                    <div className="mt-6">
                        <button
                            onClick={() => setSelectedRecord(null)}
                            className="mb-4 text-[#2dad5c] hover:text-[#24954f] font-medium flex items-center"
                        >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to list
                        </button>

                        <div className="p-6 bg-green-50 border-2 border-green-300 rounded-lg">
                            <h3 className="text-xl font-bold text-[#2dad5c] mb-4">
                                Registration Details ✓
                            </h3>
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row">
                                    <span className="font-semibold text-gray-700 sm:w-40 mb-1 sm:mb-0">Registration No:</span>
                                    <span className="text-gray-900 font-bold text-lg">
                                        {getFieldValue(selectedRecord, ["REGISTER NO", "REGISTRATION NO", "Registration No"])}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <span className="font-semibold text-gray-700 sm:w-40 mb-1 sm:mb-0">Name:</span>
                                    <span className="text-gray-900">
                                        {getFieldValue(selectedRecord, ["NAMES", "NAME", "Name", "STUDENT NAME"])}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <span className="font-semibold text-gray-700 sm:w-40 mb-1 sm:mb-0">Date of Birth:</span>
                                    <span className="text-gray-900">
                                        {getFieldValue(selectedRecord, ["DATE OF BIRTH", "DOB", "Date of Birth"])}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <span className="font-semibold text-gray-700 sm:w-40 mb-1 sm:mb-0">Events:</span>
                                    <span className="text-gray-900">
                                        {getFieldValue(selectedRecord, ["COMPETITIONS", "EVENTS", "Events", "COMPETITION"])}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <span className="font-semibold text-gray-700 sm:w-40 mb-1 sm:mb-0">Institution:</span>
                                    <span className="text-gray-900">
                                        {getFieldValue(selectedRecord, ["MADHARASA / SCHOOL", "INSTITUTION", "Institution", "SCHOOL"])}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegistrationSearch;
