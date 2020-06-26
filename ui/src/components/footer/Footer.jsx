/**
 * @license
 * Copyright 2019 Fast Forward Labs.  
 * Written by Victor Dibia / Contact : https://github.com/victordibia
 * CaseQA - CaseQA: Question Answering on Large Datasets with BERT.
 * Licensed under the MIT License (the "License"); 
 * =============================================================================
 */


import React, { Component } from "react";
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <div style={{ zIndex: 999000 }} className="centerpage pl10">
                &copy; <a href="https://github.com/victordibia/neuralqa" target="blank">NeuralQA</a> 2020.
            </div>
        );
    }
}

export default Footer;