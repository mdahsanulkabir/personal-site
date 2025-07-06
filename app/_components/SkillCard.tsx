import Image from "next/image";
import js from '@/app/_images/js.png'

const SkillCard = () => {
    return (
        <div className="border border-solid border-gray-500 px-4 py-5">
            <Image
                src={js}
                alt="Js image"
                height="28"
                width="28"
            />
            <h4 className="font-medium mt-3 mb-2">Vanilla Javascript</h4>
            <p>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
        </div>
    );
};

export default SkillCard;