import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function TambahSiswa(props) {
    const { data, setData, errors, post, progress } = useForm({
        name: "",
        nim: "",
        email: "",
        nohp: "",
        ipk: "",
        password: "",
    });
    function handleSubmit(e) {
        e.preventDefault();

        post(route("siswa.add"));
    }
    return (
        <AdminLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tabel Mahasiswa
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex flex-col space-y-2">
                {props.flash.message && props.flash.message.length > 0 ? (
                    <div className="p-4 bg-primary rounded-lg text-black">
                        {props.flash.message}
                    </div>
                ) : (
                    <></>
                )}
                <div className="overflow-hidden shadow-sm rounded-lg">
                    <div className="p-4 bg-white text-gray-900">
                        <form name="createForm" onSubmit={handleSubmit}>
                            {props.flash.message}
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="text-2xl text-black"
                                        >
                                            Tambah Siswa
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    {/* row 1 */}
                                    <tr>
                                        <td>Nama</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Type here"
                                                className="input input-bordered w-full input-sm text-white"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>NIM</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="nim"
                                                placeholder="Type here"
                                                inputMode="numeric"
                                                pattern="[0-9]+"
                                                value={data.nim}
                                                className="input text-white input-bordered w-full input-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "nim",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Type here"
                                                value={data.email}
                                                className="input input-bordered text-white w-full input-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>No. HP</td>
                                        <td>
                                            <input
                                                name="nohp"
                                                type="text"
                                                placeholder="Type here"
                                                inputMode="numeric"
                                                pattern="[0-9]+"
                                                value={data.nohp}
                                                className="input text-white input-bordered w-full input-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "nohp",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>IPK</td>
                                        <td>
                                            <input
                                                name="ipk"
                                                type="text"
                                                placeholder="Type here"
                                                className="input text-white input-bordered w-full input-sm"
                                                value={data.ipk}
                                                onChange={(e) =>
                                                    setData(
                                                        "ipk",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Type here"
                                                className="input text-white input-bordered w-full input-sm"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex lg:flex-row flex-col lg:space-x-2 space-x-0 lg:space-y-0 space-y-2 w-full justify-center pb-3 px-3">
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Daftar
                                </button>
                                <button className="btn btn-error">
                                    Kembali
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
