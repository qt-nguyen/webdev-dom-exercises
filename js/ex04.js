function togglePasswordVisibility() {
    var checkbox = document.getElementById('showPassword');
    var password_field = document.getElementById('password');
    var password_confirm_field = document.getElementById('confirmPassword');
    if (checkbox.checked) {
        password_field.type = 'text';
        password_confirm_field.type = 'text';
    } else {
        password_field.type = 'password';
        password_confirm_field.type = 'password';
    }    
}

