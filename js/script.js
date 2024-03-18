        window.addEventListener('load', () => {
            const form = document.getElementById('empForm');
            const processForm = () => {
                const formData = {
                    id: document.getElementById('id').value,
                    name: document.getElementById('name').value,
                    ext: document.getElementById('ext').value,
                    email: document.getElementById('email').value,
                    department: document.getElementById('department').value
                };
                console.log(formData);
            };
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                processForm();
            });
        });