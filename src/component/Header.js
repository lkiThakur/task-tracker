import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
<h1 >{title}</h1>
<Button color='green' text ='ADD+' clickHandler={()=>console.log('cliqued')}/>
        </header>
    )}

    Header.defaultProps={
        title:"Task-Tracker"
    }
    Header.propTypes={
        title:PropTypes.string,
    }

    // const headingStyle={color:'red', backgroundColor:'green'}
export default Header
