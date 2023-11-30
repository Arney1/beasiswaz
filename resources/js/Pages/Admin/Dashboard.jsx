import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function AdminDashboard(props) {
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
                            <td className="flex flex-col space-y-[1px]">
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
                                <button className="btn btn-error btn-xs">
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
                }
            });
            return (
                <div className="rounded-lg">
                    <div className="p-4 bg-accent border-accent border-2 rounded-t-lg text-black">
                        Pendaftaran Baru
                    </div>
                    <div className="overflow-x-auto w-full bg-white text-black rounded-b-lg">
                        <table className="table">
                            <thead className="bg-white">
                                <tr className="text-black">
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
            return (
                <>
                    <p>Belum ada data</p>
                </>
            );
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
                                <button className="btn btn-error btn-xs">
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
                                <button className="btn btn-error btn-xs">
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
                }
            });
            return (
                <div className="rounded-lg">
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
            return (
                <>
                    <p>Belum ada data</p>
                </>
            );
        }
    }

    function user() {
        if (props.user && props.user.length > 0) {
            const nice = props.user.map((user, i) => {
                return (
                    <tr key={i}>
                        <td>{user.nim}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.nohp}</td>
                        <td>{user.ipk}</td>
                        <td className="flex flex-col lg:flex-row space-y-[1px] lg:space-y-0 lg:space-x-[1px] space-x-0">
                            <button className="btn btn-primary btn-xs">
                                <Link
                                    href={route("siswa.edit")}
                                    as="button"
                                    method="get"
                                    data={{ id: user.id }}
                                >
                                    Edit
                                </Link>
                            </button>
                            <button className="btn btn-error btn-xs">
                                <Link
                                    href={route("siswa.delete")}
                                    as="button"
                                    method="post"
                                    data={{ id: user.id }}
                                >
                                    Delete
                                </Link>
                            </button>
                        </td>
                    </tr>
                );
            });
            return (
                <div>
                    <div className="p-4 bg-white rounded-t-lg">
                        Siswa{" "}
                        <a
                            href={route("siswa.addpage")}
                            className="btn btn-primary"
                        >
                            Add +
                        </a>{" "}
                    </div>
                    
                    <div className="overflow-x-auto w-full bg-white rounded-b-lg text-black">
                        <table className="table">
                            <thead className="bg-white">
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>No. HP</th>
                                    <th>IPK</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>{nice}</tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <tr>
                    <td colSpan={7}>
                        <p>Belum ada data</p>
                    </td>
                </tr>
            );
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

            <div className="flex flex-col space-y-2">
                <div className="overflow-hidden shadow-sm rounded-lg">
                    <div className="p-4 bg-primary text-gray-900">
                        You're logged in!
                    </div>
                </div>
                {beasiswa()}
                {beasiswaLama()}
                {user()}
            </div>
        </AdminLayout>
    );
}
