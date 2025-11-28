import React, { useState } from "react";
import * as XLSX from "xlsx";

const RegistrationSearch = () => {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        // Reset previous results
        setSearchResult(null);
        setError("");

        // Validate inputs
        if (!name.trim() || !dob.trim()) {
            setError("Please enter both Name and Date of Birth");
            return;
        }

        setLoading(true);

        try {
            // Load and parse both Excel files
            const boysData = await loadExcelFile("/assets/_BOYS LIST 2025 COMPETITION .xlsx");
            const girlsData = await loadExcelFile("/assets/GIRLS LIST 2025 COMPETITION.xlsx");

            // Combine both datasets
            const allData = [...boysData, ...girlsData];

            // Search for matching record
            const result = searchRecord(allData, name.trim(), dob.trim());

            if (result) {
                setSearchResult(result);
            } else {
                setError("No registration found with the provided details. Please check your Name and Date of Birth.");
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
            // Row 1: Title, Row 2: Subtitle, Row 3: Headers, Row 4: Category, Row 5+: Data
            const headers = jsonData[2]; // Row 3 contains the actual headers
            const dataStartRow = 4; // Data starts from row 5 (index 4)

            const rows = jsonData.slice(dataStartRow);

            return rows
                .filter(row => row && row[0] && row[0].toString().startsWith('AIE-')) // Filter valid registration rows
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
        const excelEpoch = new Date(1899, 11, 30); // Excel's epoch
        const days = Math.floor(serial);
        const date = new Date(excelEpoch.getTime() + days * 86400000);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const searchRecord = (data, searchName, searchDob) => {
        // Normalize search inputs
        const normalizedSearchName = searchName.toLowerCase().trim();
        const normalizedSearchDob = searchDob.trim();

        // Find matching record
        return data.find(record => {
            // Get the name field - the column is called "NAMES" in the Excel files
            const recordName = (
                record["NAMES"] ||
                record["NAME"] ||
                record["Name"] ||
                record["STUDENT NAME"] ||
                record["Student Name"] ||
                ""
            ).toString().toLowerCase().trim();

            // Get the DOB field - the column is called "DATE OF BIRTH"
            const recordDob = (
                record["DATE OF BIRTH"] ||
                record["DOB"] ||
                record["Date of Birth"] ||
                record["D.O.B"] ||
                ""
            ).toString().trim();

            // Check if both name and DOB match
            return recordName.includes(normalizedSearchName) && recordDob === normalizedSearchDob;
        });
    };

    const getFieldValue = (record, possibleKeys) => {
        for (let key of possibleKeys) {
            if (record[key]) return record[key];
        }
        return "N/A";
    };

    return (
        <div className="w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Search Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2dad5c]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Date of Birth (DD/MM/YYYY) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="e.g., 31/07/2010"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2dad5c]"
                        />
                    </div>

                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className={`w-full bg-[#2dad5c] text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-[#24954f] transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Searching..." : "Search Registration Number"}
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}

                {/* Search Result */}
                {searchResult && (
                    <div className="mt-6 p-6 bg-green-50 border-2 border-green-300 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2dad5c] mb-4">
                            Registration Found! ✓
                        </h3>
                        <div className="space-y-2">
                            <div className="flex">
                                <span className="font-semibold text-gray-700 w-40">Registration No:</span>
                                <span className="text-gray-900 font-bold text-lg">
                                    {getFieldValue(searchResult, ["REGISTER NO", "REGISTRATION NO", "Registration No", "Reg No"])}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold text-gray-700 w-40">Name:</span>
                                <span className="text-gray-900">
                                    {getFieldValue(searchResult, ["NAMES", "NAME", "Name", "STUDENT NAME"])}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold text-gray-700 w-40">Date of Birth:</span>
                                <span className="text-gray-900">
                                    {getFieldValue(searchResult, ["DATE OF BIRTH", "DOB", "Date of Birth"])}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold text-gray-700 w-40">Events:</span>
                                <span className="text-gray-900">
                                    {getFieldValue(searchResult, ["COMPETITIONS", "EVENTS", "Events", "COMPETITION"])}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold text-gray-700 w-40">Institution:</span>
                                <span className="text-gray-900">
                                    {getFieldValue(searchResult, ["MADHARASA / SCHOOL", "INSTITUTION", "Institution", "SCHOOL"])}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegistrationSearch;
