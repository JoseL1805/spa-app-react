import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/marvel/',{
            replace : true
        })

    }

    return (
        <div className="d-flex align-items-center h-100">
            <div className="container">
                <h1 className="text-center">Heroes App</h1>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}