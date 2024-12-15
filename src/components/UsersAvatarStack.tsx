import Image from "next/image"
import ProfilePicture from "@public/assets/ProfilePicture.png";


export const UsersAvatarStack = () => {

    return (
        <div className="flex flex-row items-center">
            <div className="size-10 rounded-full overflow-hidden border-[3px] border-white">
                <Image
                    src={ProfilePicture}
                    quality={50}
                    className="object-cover w-full h-full"
                    alt="Profile Picture"
                />
            </div>
            <div className="size-10 rounded-full overflow-hidden border-[3px] border-white -ml-2">
                <Image
                    src={ProfilePicture}
                    quality={50}
                    className="object-cover w-full h-full"
                    alt="Profile Picture"
                />
            </div>
            <div className="size-10 rounded-full overflow-hidden border-[3px] border-white -ml-2">
                <Image
                    src={ProfilePicture}
                    quality={50}
                    className="object-cover w-full h-full"
                    alt="Profile Picture"
                />
            </div>
            <div className="flex items-center justify-center size-10 rounded-full bg-[#c6ced9] overflow-hidden border-[3px] border-white -ml-2">
                <p className="text-[#667085] text-sm">+10</p>
            </div>
        </div>
    )

}