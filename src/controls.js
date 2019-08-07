/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';


const Controls = ({ renderButtonComponent, label, onPressControl }) => {
  return renderButtonComponent(label, () => onPressControl());
};

Controls.propTypes = {
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};

export default Controls;
