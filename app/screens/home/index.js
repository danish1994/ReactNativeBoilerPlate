import { Home } from './component';
import { decrement, increment } from '../../store/ui/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const {
        ui: { counter }
    } = state;
    return {
        counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
