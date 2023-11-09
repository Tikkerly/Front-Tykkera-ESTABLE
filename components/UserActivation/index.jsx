
import Link from 'next/link';

const UserActivation = () => {



    return (
        <div className="">
            <h1 className="text-4xl mb-5">Usuario activado</h1>
            <div className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Link href="/home">
                    <button type="submit">Continuar</button>
                </Link>
            </div>
        </div>
    );
};

export default UserActivation
