document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const rollNoInput = document.getElementById('studentId');
    const nameInput = document.getElementById('nameInput');
    const resultDiv = document.getElementById('result');

    // Load and parse the CSV data (replace 'data.csv' with your file path).
    fetch('result.csv')
        .then(response => response.text())
        .then(csvData => {
            const dataRows = csvData.split('\n');
            const data = dataRows.map(row => row.split(',')); // Assuming the CSV format is "Roll No,Name,Results".

            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const searchRollNo = rollNoInput.value.trim();
                const searchName = nameInput.value.trim();

                let resultHTML = '';
                for (let i = 0; i < data.length; i++) {
                    const rollNo = data[i][0];
                    const name = data[i][1];
                    const results = data[i][2];

                    if (searchRollNo && rollNo === searchRollNo) {
                        resultHTML = `Results for Student ${rollNo}  : Congratulations you are  ${results} for Seeeds Scholarship.Admission Team will contact you soon.`;
                        break;
                    } else if (searchName && name === searchName) {
                        resultHTML = `Results for ${name}: Congratulations you are ${results}`;
                        break;
                    }
                }

                resultDiv.innerHTML = resultHTML || 'Sorry your application not selected or invalid reference ID';
            });
        })
        .catch(error => {
            console.error('Error loading CSV data:', error);
        });
});
