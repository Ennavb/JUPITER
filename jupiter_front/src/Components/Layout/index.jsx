import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  return (
    <div className='flex flex-col items-center mt-10 text-5x'>
      {children}
    </div>
  )
} 
export default Layout
