import React from 'react';

class Questions extends React.Component {
    // state = {
    //     /*set initial state*/
    // }

    // getDerivedStateFromProps(nextProps) {
    //     /*if the props have changed
    //         re-set questions
    //     */
    // }

    render() {
        let formContents = this.props.formContents;
        return(
            <div>
                <h1>Questions</h1>
                <h2>{formContents}</h2>
            </div>
        );
    }

}

export default Questions;