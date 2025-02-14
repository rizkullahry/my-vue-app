interface ProfileHeaderProps {
    avatar: string;
    image: string;
} // This is the interface for the props of the ProfileHeader component

interface ProfileCardProps {
    header: ProfileHeaderProps;
    name: string;
    desc: string;
    location: string;
    email: string;
} // This is the interface for the props of the ProfileCard component

export const dataProfileSection: ProfileCardProps = {
    header: {
        avatar: '/image/person1.png',
        image: '/image/bg-image-profile.png',
    },
    name: 'John Doe',
    desc: 'Analyst - System Solution',
    location: 'BUMA-HO',
    email: 'johndoe@bukitmakmur.com'
}
// This is the data for the ProfileCard component