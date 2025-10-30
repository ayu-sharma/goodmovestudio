"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all classes
  const fetchClasses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/getClass');
      // Handle nested data structure
      const classesData = response.data?.data || response.data || [];
      setClasses(classesData);
      return classesData;
    } catch (err) {
      setError(err.message);
      console.error('Error fetching classes:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Fetch all workshops
  const fetchWorkshops = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/getWorkshop');
      // Handle nested data structure
      const workshopsData = response.data?.data || response.data || [];
      setWorkshops(workshopsData);
      return workshopsData;
    } catch (err) {
      setError(err.message);
      console.error('Error fetching workshops:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";

    try {
      const date = new Date(dateString);
      if (isNaN(date?.getTime())) return "";

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);

      // Get day of the week
      const dayOfWeek = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(date);

      // Extract month and day without comma
      const parts = formattedDate?.split(" ");
      const month = parts?.[0]; // "Jan", "Feb", etc.
      const day = parts?.[1]?.replace(",", ""); // Remove comma from day

      return { formattedDate, month, day, dayOfWeek };
    } catch (error) {
      return "";
    }
  };

  // Get class by ID
  const getClassById = (id) => {
    return classes?.find(cls => cls?.id === id);
  };

  // Get workshop by ID
  const getWorkshopById = (id) => {
    return workshops?.find(workshop => workshop?.id === id);
  };
  // console.log("workshops", getWorkshopById(1));

  // Get all events (classes + workshops)
  const getAllEvents = () => {
    const allEvents = [
      ...classes.map(cls => ({ ...cls, type: 'Class' })),
      ...workshops.map(workshop => ({ ...workshop, type: 'Workshop' }))
    ];
    return allEvents;
  };

  // Initialize data on mount
  useEffect(() => {
    fetchClasses();
    fetchWorkshops();
  }, []);

  const value = {
    classes,
    workshops,
    loading,
    error,
    fetchClasses,
    fetchWorkshops,
    getClassById,
    getWorkshopById,
    getAllEvents,
    formatDate
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
