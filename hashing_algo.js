// Array to store user credentials
let users = [];

// Function to generate a random salt
function generate_Salt (length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let salt = '';
    for (let i = 0; i < length; i++) {
        salt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return salt;
}

// Function to generate a hash with salt
function generate_Hash (password, salt) {
    const combinedString = password + salt;
    let hash = 0;
    for (let i = 0; i < combinedString.length; i++) {
        const char = combinedString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

// Function to handle sign up
function signUp(username, password) {
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        return "Username already exists!";
    }

    // Generate salt and hash password
    const salt = generate_Salt();
    const hashedPassword = generate_Hash(password, salt);
    
    // Store username, hashed password, and salt
    users.push({
        username: username,
        password: hashedPassword,
        salt: salt
    });
    
    return "Sign up successful!";
}

// Function to handle login
function login(username, password) {
    // Find user in array
    const user = users.find(user => user.username === username);
    
    if (!user) {
        return "User not found!";
    }

    // Compare hashed passwords using the stored salt
    const hashedPassword = generate_Hash(password, user.salt);
    if (user.password === hashedPassword) {
        return "Login successful!";
    } else {
        return "Incorrect password!";
    }
}

// Main function to handle user interaction
function main() {
    while (true) {
        const choice = prompt("Enter 1 for Sign Up, 2 for Login, or 3 to Exit:");

        if (choice === '3') {
            console.log("Goodbye!");
            break;
        }

        const username = prompt("Enter username:");
        const password = prompt("Enter password:");

        if (choice === '1') {
            const result = signUp(username, password);
            console.log(result);
            // Display users array without showing actual passwords
            console.log("Current users:", users.map(user => ({
                username: user.username,
                salt: user.salt
            })));
        } else if (choice === '2') {
            const result = login(username, password);
            console.log(result);
        } else {
            console.log("Invalid choice!");
        }
    }
}

main();
