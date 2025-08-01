import styles from "./header.module.css"

function Header() {
  return (
    <div className={`top-strip py-1 ${styles.border}`}>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='col1 w[50%]'>
                    <p className='text-[14px]'>Get up to 50% off, limited time only</p>
                </div>
                <div className='col2 w[50%]'>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Header
