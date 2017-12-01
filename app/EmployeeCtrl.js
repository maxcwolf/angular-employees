const app = angular.module("EmployeeMgmt", [])

app.controller("EmployeeCtrl", function($scope) {
    $scope.employees = [
        {
            "id": 1,
            "firstName": "Erin",
            "lastName": "Orstrom",
            "employmentStart": 1512140013765,
            "employmentEnd": null
        },
        {
            "id": 2,
            "firstName": "Wayne",
            "lastName": "Hutchinson",
            "employmentStart": 1512139999102,
            "employmentEnd": null
        },
        {
            "id": 3,
            "firstName": "Sarah",
            "lastName": "Story",
            "employmentStart": 1512139999729,
            "employmentEnd": null
        },
        {
            "id": 4,
            "firstName": "Sulaiman",
            "lastName": "Allan",
            "employmentStart": 1512140294571,
            "employmentEnd": null
        },
        {
            "id": 5,
            "firstName": "Ben",
            "lastName": "Marks",
            "employmentStart": 1512200192934,
            "employmentEnd": null
        }
    ]
    $scope.killEmployee = function(emp) {

        var empIndex = $scope.employees.indexOf(emp);

        if (empIndex >= 0) { //why do we do this?
            $scope.employees[empIndex].employmentEnd = Date.now()
        }
        };
  });