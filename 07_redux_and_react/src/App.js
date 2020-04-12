import {connect} from 'react-redux'
import Counter from './Counter'

var mapStateToProps = function (state) {
    return {
        countVal: state.count
    };
}

var increaseAction = {type: 'increase'};
var decreaseAction = {type: 'decrease'};

var mapDispatchToProps = function (dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default connectedComponent;