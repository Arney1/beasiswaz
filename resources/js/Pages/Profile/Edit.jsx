import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import NavMenu from "@/Components/NavMenu";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
            menus={
                <>
                    <NavMenu link={"/dashboard"} title={"Dashboard"}></NavMenu>
                    <NavMenu link={"/daftar"} title={"Daftar"}></NavMenu>
                    <NavMenu link={"/hasil"} title={"Hasil"}></NavMenu>
                </>
            }
        >
            <Head title="Profile" />

            <div className="flex flex-col flex-1 space-y-2">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className=""
                    />
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm className="" />
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm className="" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
