// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

//#region  CUSTOM MINS
var number = {
  "type": "",
  "message0": '숫자 데이터 %1 = %2',
  "args0": [
    { "type": "field_variable", "name": "name", "variable": "num1" },
    {
      "type": "input_value",
      "name": "value",
      "variable": 0, "check": "Number"
    }
  ],
  "colour": 310,
  "tooltip": "",
}

Blockly.Blocks['number'] = {
  init: function () {
    this.jsonInit(number);
  }
};
////////////////////////////////////////////////////////////////////
var lengthof = {
  "type": "string_length",
  "message0": 'length of %1',
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    },
  ],
  "output": "Number",
  "colour": 160,
  "tooltip": "Returns number of letters in the provided text.",
  "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
}

Blockly.Blocks['lengthof'] = {
  init: function () {
    this.jsonInit(lengthof);
    this.setStyle('loop_blocks');
  }
};
////////////////////////////////////////////////////////////////////

var mathChangeJson = {
  "message0": "change %1 by %2",
  "args0": [
    { "type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""] },
    { "type": "input_value", "name": "DELTA", "check": "Number" }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
};

Blockly.Blocks['math_change'] = {
  init: function () {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      return 'Add a number to variable "%1".'.replace('%1',
        thisBlock.getFieldValue('VAR'));
    });
  }
};
////////////////////////////////////////////////////////////////////
//#endregion CUSTOM MINS

var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function () {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};
