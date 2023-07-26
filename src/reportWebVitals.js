const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    // Use dynamic import to load the web-vitals library only when needed
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each performance metric function with the provided callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => {
      // Handle errors if the web-vitals library fails to load
      console.error("Error loading web-vitals:", error);
    });
  }
};

export default reportWebVitals;
