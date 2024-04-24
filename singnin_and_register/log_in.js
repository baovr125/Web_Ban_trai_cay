    $(document).ready(function() {
        $('#register-submit').click(function(event) {
            event.preventDefault();
            $('#register .error').remove(); // Xóa thông báo lỗi cũ trước khi đăng ký
            authentication.register();
        });

        $('#login-submit').click(function(event) {
            event.preventDefault();
            $('#login .error').remove(); // Xóa thông báo lỗi cũ trước khi đăng nhập
            authentication.login();
        });

        $('#register-link').click(function(event) {
            event.preventDefault();
            register();
        });

        $('#login-link').click(function(event) {
            event.preventDefault();
            login();
        });
    });

    var authentication = {
        validatePassword: function(password) {
            return password.length >= 8;
        },

        validateUsername: function(username) {
            return username.trim() !== '' && !username.startsWith(' ');
        },

        validateEmail: function(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return email.trim() !== '' && emailRegex.test(email);
        },

        register: function() {
            const username = $('#register input[name="username"]').val();
            const email = $('#register input[name="email"]').val();
            const password = $('#register input[name="password"]').val();

            if (!this.validateUsername(username)) {
                $('#register input[name="username"]').after('<div class="error">User name ký tự đầu không được để trống</div>');
            }

            if (!this.validateEmail(email)) {
                $('#register input[name="email"]').after('<div class="error">Địa chỉ email không hợp lệ</div>');
            }

            if (!this.validatePassword(password)) {
                $('#register input[name="password"]').after('<div class="error">Mật khẩu ít nhất phải 8 ký tự</div>');
            }

            if (this.validateUsername(username) && this.validateEmail(email) && this.validatePassword(password)) {
                const userData = {
                    username: username,
                    email: email,
                    password: password
                };
                localStorage.setItem('userData', JSON.stringify(userData));
                $('#register-form')[0].reset(); // Reset form after successful registration
                $('#register').prepend('<div class="alert success">Đăng ký thành công!</div>');
                login(); // Automatically switch to login form
            }
        },

        login: function() {
            const storedUserData = JSON.parse(localStorage.getItem('userData'));
            const usernameInput = $('#login input[name="username"]').val();
            const passwordInput = $('#login input[name="password"]').val();

            if (storedUserData && usernameInput === storedUserData.username && passwordInput === storedUserData.password) {
                $('#login').prepend('<div class="alert success">Đăng nhập thành công!</div>');
                window.location.href = '../HTML/home1.html';
            } else {
                $('#login').prepend('<div class="alert error">Sai tên đăng nhập hoặc mật khẩu.</div>');
            }
        }
    };

    function login() {
        var x = $('#login');
        var y = $('#register');

        x.css('left', '1px');
        y.css('right', '-390px');
    }

    function register() {
        var x = $('#login');
        var y = $('#register');

        x.css('left', '-390px');
        y.css('right', '1px');
    }
