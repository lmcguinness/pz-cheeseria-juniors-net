using System;
namespace Pz.Cheeseria.Api.Data
{
    public class RecentPurchases
    {

        private Models.Cheese[] _recentItemsPurchases;

        public Models.Cheese[] RecentItemsPurchased
        {
            get => _recentItemsPurchases;
            set => _recentItemsPurchases = value;
        }
        public RecentPurchases()
        {
        }

        public void setItemsPurchased(Models.Cheese[] recentItems)
        {
            _recentItemsPurchases = recentItems;
        }

        public Models.Cheese[] getItemsPurchased()
        {
            return _recentItemsPurchases;
        }
    }
}
