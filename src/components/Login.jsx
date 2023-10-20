import { Link } from "react-router-dom"

export function Login() {
    return (
        <main className="login">
            <div className="pg-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1>Login</h1>
                        </div>
                        <div className="col-lg-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-end">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container content">
                <div className="row login">
                    <div className="col-md-6 my-auto px-0">
                        <img src="/images/ecom.jpg"
                            alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 mt-2 p-4">
                        <h3 className="card-title text-center">Login</h3>
                        <form className="validated-form">
                            <div className="mb-3">
                                <label>Username:</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="mb-3">
                                <label>Password:</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="d-grid text-center text-lg-start mt-4 pt-2">
                                <button className="btn btn-primary btn-lg btn-block">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}