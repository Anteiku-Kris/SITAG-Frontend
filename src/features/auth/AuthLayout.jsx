import { Outlet } from 'react-router';

export function AuthLayout() {
    return (
        <>

            <div className="p-4">
                <Outlet />
            </div>
        </>
    );
}
