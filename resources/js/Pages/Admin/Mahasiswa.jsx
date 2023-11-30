import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Mahasiswa(props) {
    function beasiswa() {
        if (props.beasiswa && props.beasiswa.length > 0) {
            const nice = props.beasiswa.map((beasiswa, i) => {
                if (beasiswa.status == "belum") {
                    const statz = "Belum Diverifikasi";
                    return (
                        <tr key={i}>
                            <td>{beasiswa.nim}</td>
                            <td>{beasiswa.nama}</td>
                            <td>{beasiswa.email}</td>
                            <td>{beasiswa.nohp}</td>
                            <td>{beasiswa.semester}</td>
                            <td>{beasiswa.ipk}</td>
                            <td>{beasiswa.pilihan}</td>
                            <td>
                                {beasiswa.berkas}
                                <a
                                    href={"/docs/" + beasiswa.berkas}
                                    className="lg:ml-5 mt-1 ml-0 lg:mt-0 btn btn-success btn-xs "
                                >
                                    Lihat
                                </a>
                            </td>
                            <td>{statz}</td>
                            <td>
                                <button className="btn btn-primary btn-xs">
                                    <Link
                                        href={route("beasiswa.edit")}
                                        as="button"
                                        method="get"
                                        data={{ id: beasiswa.id }}
                                    >
                                        Verifikasi
                                    </Link>
                                </button>
                                <button className="mt-1 btn btn-error btn-xs">
                                    <Link
                                        href={route("beasiswa.delete")}
                                        as="button"
                                        method="post"
                                        data={{ id: beasiswa.id }}
                                    >
                                        Delete
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    );
                } else {
                    return null;
                }
            });
            return (
                <div>
                    <div className="p-4 bg-white">Pendaftaran Baru</div>
                    <div className="overflow-x-auto w-full bg-white text-black">
                        <table className="table">
                            <thead className="bg-white">
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>No. HP</th>
                                    <th>Semester</th>
                                    <th>IPK</th>
                                    <th>Pilihan</th>
                                    <th>Berkas</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>{nice}</tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return console.log("tai");
        }
    }

    function beasiswaLama() {
        if (props.beasiswa && props.beasiswa.length > 0) {
            const bruh = props.beasiswa.map((beasiswa, i) => {
                if (beasiswa.status == "lulus") {
                    const statz = "Lulus";
                    const yeah = (
                        <tr key={i}>
                            <td>{beasiswa.nim}</td>
                            <td>{beasiswa.nama}</td>
                            <td>{beasiswa.email}</td>
                            <td>{beasiswa.nohp}</td>
                            <td>{beasiswa.semester}</td>
                            <td>{beasiswa.ipk}</td>
                            <td>{beasiswa.pilihan}</td>
                            <td>
                                {beasiswa.berkas}
                                <a
                                    href={"/docs/" + beasiswa.berkas}
                                    className="lg:ml-5 mt-1 ml-0 lg:mt-0 btn btn-success btn-xs "
                                >
                                    Lihat
                                </a>
                            </td>
                            <td>{statz}</td>
                            <td>
                                <button className="btn btn-error">
                                    <Link
                                        href={route("beasiswa.delete")}
                                        as="button"
                                        method="post"
                                        data={{ id: beasiswa.id }}
                                    >
                                        Delete
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    );
                    return yeah;
                } else if (beasiswa.status == "tidak") {
                    const statz = "Tidak Lulus";
                    const yeah = (
                        <tr key={i}>
                            <td>{beasiswa.nim}</td>
                            <td>{beasiswa.nama}</td>
                            <td>{beasiswa.email}</td>
                            <td>{beasiswa.nohp}</td>
                            <td>{beasiswa.semester}</td>
                            <td>{beasiswa.ipk}</td>
                            <td>{beasiswa.pilihan}</td>
                            <td>
                                {beasiswa.berkas}
                                <a
                                    href={"/docs/" + beasiswa.berkas}
                                    className="lg:ml-5 mt-1 ml-0 lg:mt-0 btn btn-success btn-xs "
                                >
                                    Lihat
                                </a>
                            </td>
                            <td>{statz}</td>
                            <td>
                                <button className="btn btn-error">
                                    <Link
                                        href={route("beasiswa.delete")}
                                        as="button"
                                        method="post"
                                        data={{ id: beasiswa.id }}
                                    >
                                        Delete
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    );
                    return yeah;
                } else {
                    return null;
                }
            });
            return (
                <div>
                    <div className="p-4 bg-white">Sudah diverifikasi</div>
                    <div className="overflow-x-auto w-full bg-white text-black">
                        <table className="table">
                            <thead className="bg-white">
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>No. HP</th>
                                    <th>Semester</th>
                                    <th>IPK</th>
                                    <th>Pilihan</th>
                                    <th>Berkas</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>{bruh}</tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return console.log("tai");
        }
    }

    return (
        <AdminLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tabel Beasiswa
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg flex flex-col space-y-4">
                        <div className="p-4 bg-white text-gray-900">
                            You're logged in!
                        </div>
                        {beasiswa()}
                        {beasiswaLama()}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
