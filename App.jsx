import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [isOperatorPressed, setIsOperatorPressed] = useState(false);

  const handleNumberInput = (num) => {
    if (displayValue === '0' || isOperatorPressed) {
      setDisplayValue(num.toString());
      setIsOperatorPressed(false);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op) => {
    if (!isOperatorPressed) {
      setOperator(op);
      setFirstValue(displayValue);
      setIsOperatorPressed(true);
    }
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
    setIsOperatorPressed(false);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setIsOperatorPressed(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>
          {firstValue} {operator} {isOperatorPressed ? '' : displayValue}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('/')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('*')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('-')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleNumberInput(0)}>
            <Text style={[styles.buttonText, styles.zeroButtonText]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('+')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    borderRadius: 10,
  },
  displayText: {
    fontSize: 48,
    color: '#333',
  },
  buttonContainer: {
    flex: 3,
    width: '80%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    margin: 2,
    padding: 15,
  },
  buttonText: {
    fontSize: 34,
    color: '#333',
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  zeroButtonText: {
    marginLeft: 10,
  },
  operatorButton: {
    backgroundColor: '#f0f0f0',
  },
  operatorButtonText: {
    color: '#ff9500',
  },
  equalButton: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9500',
    elevation: 3,
  },
  equalButtonText: {
    fontSize: 32,
    color: '#fff',
  },
  clearButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    elevation: 3,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: '#333',
  },
});
