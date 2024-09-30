export default function createReportObject(employeesList) {
    const obj = {
        allEmployees: employeeList,
        getNumberOfDepartments: (employeesList) => (Object.keys(employeesList)).length,
    };
    return obj;
};
