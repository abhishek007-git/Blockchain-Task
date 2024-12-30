# Solidity Calculator Smart Contract

A simple calculator implementation in Solidity that performs basic arithmetic operations on the blockchain.

## Features
- Addition
- Subtraction
- Multiplication
- Division
- Remainder
- Exponentiation

## Usage
The contract can be deployed using Remix IDE (https://remix.ethereum.org/)

## License
GPL-3.0


-------------------------------------------------------------------------------------------------------------------------------------------------------------


# Custom Hashing and Salting Algorithm

Custom password hashing and salting concepts using JavaScript.

## Features

- User registration (Sign Up)
- User authentication (Login)
- Password hashing with salt
- In-memory user storage
- Simple command-line interface

## Running the Application

1. Open your web browser
2. Open the browser's developer tools (Usually F12 or right-click -> Inspect)
3. Go to the Console tab
4. Copy and paste the entire code into the console
5. Press Enter to run

## Usage

### Main Menu Options:
- Enter `1` for Sign Up
- Enter `2` for Login
- Enter `3` to Exit

### Sign Up Process:
1. Select option 1
2. Enter desired username
3. Enter password
4. System will confirm successful registration

### Login Process:
1. Select option 2
2. Enter username
3. Enter password
4. System will verify credentials and provide feedback

## Security Features

1. **Password Hashing:**
   - Converts passwords into hash values
   - Original passwords are never stored

2. **Salt Generation:**
   - Unique random salt for each user
   - Prevents rainbow table attacks
   - Makes identical passwords have different hashes

3. **Credential Storage:**
   - Stores only hashed passwords with salt
   - Username uniqueness enforcement

## Code Structure

- `generateSalt()`: Creates random salt string
- `generateHash()`: Produces hash from password and salt
- `signUp()`: Handles user registration
- `login()`: Manages authentication
- `main()`: Controls program flow

