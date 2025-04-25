import { toast } from 'react-toastify';

const AppButtons = () => {

    const handleClick = () =>{
        toast.success('Patience young padawan... There will be content...', {
            position: 'top-center',
            autoClose:3000,
            theme: 'dark',
        });
    };

    return (
        <div className="flex justify-center gap-4">
            <button className="px-4 py-2 text-white text-lg sm:text-xl font-pixel bg-[#181818] hover:shadow-white-outline rounded-sm" onClick={handleClick}>Nearest App</button>
        </div>
    );
};

export default AppButtons;