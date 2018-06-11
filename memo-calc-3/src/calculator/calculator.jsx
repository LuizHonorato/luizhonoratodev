import React from 'react'
import Grid from '../template/grid'

export default props => (
    <div className='container'>
        <div className='row text-center'>
            <h2 className='title-page'>MemoCalc3</h2>
        </div>
        <div className='box-calculator'>
            <div className='row'>
                <Grid cols='12 9 7'>
                    <input type="text" className="calc-area" />
                    <span className='calc-button clear-button'>C</span>
                </Grid>
                <Grid cols='12 9 5'>
                    <p>Memória</p>
                </Grid>
            </div>
            <div className='row'>
                <Grid cols='12 9 7'>
                    <span className='calc-button'>7</span>
                    <span className='calc-button'>8</span>
                    <span className='calc-button'>9</span>
                    <span className='calc-button'>+</span>

                    <span className='calc-button'>4</span>
                    <span className='calc-button'>5</span>
                    <span className='calc-button'>6</span>
                    <span className='calc-button'>-</span>

                    <span className='calc-button'>1</span>
                    <span className='calc-button'>2</span>
                    <span className='calc-button'>3</span>
                    <span className='calc-button'>/</span>

                    <span className='calc-button'>0</span>
                    <span className='calc-button'>.</span>
                    <span className='calc-button'>=</span>
                    <span className='calc-button'>*</span>
                </Grid>
            </div>
        </div>
    </div>
)