import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Pages/Shared/Loading/Loading';
import Header from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () =>
{
    const { user } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if(isBuyerLoading || isSellerLoading || isAdminLoading) {
        return <Loading/>
    }

    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 sm:w-75 md:bg-opacity-0 bg-white text-base-content">
                        {
                            isBuyer &&
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        }
                        {/* {
                            isBuyer &&
                            <li><Link to='/dashboard/myWishlist'>My Wishlist</Link></li>
                        } */}
                        {
                            isSeller &&
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        }
                        {
                            isSeller &&
                            <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                        }
                        {
                            isSeller &&
                            <li><Link to='/dashboard/myBuyer'>My Buyers</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allSeller'>All Sellers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allBuyer'>All Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/reportedItem'>Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;