// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SimpleCalculator {
    
    struct CalculationData {
        string operation;
        int256 result;
    }
    
    CalculationData public lastCalculation;
    
    function add(int256 a, int256 b) public returns (int256) {
        int256 result = a + b;
        lastCalculation = CalculationData("Addition", result);
        return result;
    }
    
    function subtract(int256 a, int256 b) public returns (int256) {
        int256 result = a - b;
        lastCalculation = CalculationData("Subtraction", result);
        return result;
    }
    
    function multiply(int256 a, int256 b) public returns (int256) {
        int256 result = a * b;
        lastCalculation = CalculationData("Multiplication", result);
        return result;
    }
    
    function divide(int256 a, int256 b) public returns (int256) {
        require(b != 0, "Cannot divide by zero");
        int256 result = a / b;
        lastCalculation = CalculationData("Division", result);
        return result;
    }
    
    function remainder(int256 a, int256 b) public returns (int256) {
        require(b != 0, "Cannot divide by zero");
        int256 result = a % b;
        lastCalculation = CalculationData("Remainder", result);
        return result;
    }
    
    function exponentiation(uint256 base, uint256 exponent) public returns (uint256) {
        uint256 result = 1;
        for(uint256 i = 0; i < exponent; i++) {
            result *= base;
        }
        lastCalculation = CalculationData("Exponentiation", int256(result));
        return result;
    }
    

}
