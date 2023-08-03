import XoLogo from '../assets/image-3.png'
function LoginPage(props) {
    return(
        <div>
            <img className='xo-logo' src={XoLogo} />
            <div className='form-container'>
                <div className='login-form-container'>
                    <div className='player-1'>
                <label htmlFor="player-1">Player 1</label>
                <input 
                    type="text"
                    id='player-1'  
                    placeholder='Enter Your Name Please' 
                    name={props.name1} 
                    value={props.value1} 
                    onChange={props.onChange} />
                    </div>
                    <div className='player-2'>
                <label htmlFor="player-2">Player 2</label>
                <input
                    type="text"
                    id='player-2'
                    placeholder='Enter Your Name Please'
                    name={props.name2}
                    value={props.value2}
                    onChange={props.onChange} />
                    </div>
                <button id='start-game-btn' onClick={props.onClick} value={props.value}>Start Game</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;