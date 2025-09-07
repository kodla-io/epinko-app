"use client";

import React, { useState, useEffect } from "react";
import { apiService } from "../../../services/api";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  const handleHealthCheck = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await apiService.healthCheck();
      setResult({
        data: response.data,
        status: response.status,
        headers: response.headers
      });
      console.log("Health check başarılı:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error("Health check error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowApiInfo = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await apiService.healthCheck();
      setResult({
        data: response.data,
        status: response.status,
        headers: response.headers
      });
      
      // API info'dan endpoint'leri göster
      if (response.data && response.data.data && response.data.data.endpoints) {
        console.log("Mevcut API Endpoint'leri:");
        Object.entries(response.data.data.endpoints).forEach(([endpoint, description]) => {
          console.log(`${endpoint}: ${description}`);
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterTest = async () => {
    if (!timestamp) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Postman'deki gibi timestamp kullan
      const testData = {
        email: `test${timestamp}@gmail.com`,
        nickname: `testuser${timestamp}`,
        password: "testpass123",
        password_confirm: "testpass123"
      };
      
      console.log("Register test data:", testData);
      
      const response = await apiService.register(testData);
      setResult({
        data: response.data,
        status: response.status,
        headers: response.headers
      });
      console.log("Register test başarılı:", response.data);
      
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error("Register test error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">API Test Sayfası</h1>
      
      <div className="mb-6 space-x-4">
        <button
          onClick={handleHealthCheck}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Test Ediliyor..." : "Health Check"}
        </button>
        
        <button
          onClick={handleShowApiInfo}
          disabled={loading}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Test Ediliyor..." : "API Bilgileri Göster"}
        </button>

        <button
          onClick={handleRegisterTest}
          disabled={loading || !timestamp}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Test Ediliyor..." : "Register Test"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Hata:</strong> {error}
        </div>
      )}

      {result && (
        <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-4">Test Sonucu:</h2>
          
          <div className="mb-4">
            <h3 className="font-bold">Status:</h3>
            <p>Code: {result.status}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Headers:</h3>
            <pre className="bg-gray-200 p-2 rounded text-sm overflow-auto">
              {JSON.stringify(result.headers, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="font-bold">Response Data:</h3>
            <pre className="bg-gray-200 p-2 rounded text-sm overflow-auto">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
