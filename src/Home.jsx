import React from 'react'
import { history } from './App'

const App = (props) => {

    function handleClick() {
        // demo为了演示没有使用props.history
        // 实际项目中业务逻辑写在redux或者redux-saga中，在组件外无法获取到props.history
        history.push({pathname: '/login'})
    }

    return (
        <div>
            <p>home page</p>
            <button onClick={handleClick}>点我跳转 /login </button>
        </div>
    )
}

export default App;
