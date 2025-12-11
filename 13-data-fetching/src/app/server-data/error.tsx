"use client"
const ErrorBoundary = ({error}:{error : Error}) => {
        return (
        <div>
                <h1>Something went wrong : To Fetch Data</h1>
                <p>{error.message}</p>
        </div>
        )
}

export default ErrorBoundary