import Image from "next/image";

const ProfilePhoto = () => {
    return (
        <div className="w-full">
            <Image src="/images/profile2.jpeg" 
            width={400} 
            height={535} 
            alt="Muashef - React Developer"
            className={"rounded-[10px]"} 
            priority 
            />
        </div>
    )
}

export default ProfilePhoto