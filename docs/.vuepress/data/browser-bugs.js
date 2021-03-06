module.exports = [
    {
        description: "Fluid typography calculated using calc() and viewport units is currently not supported in Safari and Internet Explorer. Min and max font-size will still be respected.",
        category: "responsive-typography",
        browsers: "Safari, IE",
    },
    {
        description: "The details element is currently not supported in Edge or Internet Explorer.",
        category: "details",
        browsers: "Edge, IE",
    },
    {
        description: "Inputs with display: inline-flex applied currently do not display correctly in a line in Edge or Internet Explorer.",
        category: "inputs",
        browsers: "Edge, IE",
    },
    {
        description: "There are currently some issues styling the draggable button on range inputs in Edge, specifically related to sizing and border-radius.",
        category: "range-inputs",
        browsers: "Edge",
    },
    {
        description: "Applying button styling to file inputs is currently not supported in Edge or Internet Explorer.",
        category: "file-inputs",
        browsers: "Edge, IE",
    },
    {
        description: "The meter element is currently not supported in Internet Explorer.",
        category: "meters",
        browsers: "Edge, IE",
    },
    {
        description: "Indeterminate progress bar styling is currently not supported in Edge or Internet Explorer.",
        category: "progress",
        browsers: "Edge, IE",
    }
]
