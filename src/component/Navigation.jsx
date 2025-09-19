const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <School className="h-8 w-8" />
            <div>
              <span className="font-bold text-xl">IGPS</span>
              <p className="text-xs text-blue-100">Iqra Grammar Public School</p>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          <div className={`nav-items hidden md:flex space-x-4 ${isMobileMenuOpen ? 'open' : ''}`}>
            <button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>About</span>
            </button>
            <button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button onClick={() => { setCurrentPage('fees'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Fees</span>
            </button>
            <button onClick={() => { setCurrentPage('dmc'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
              <FileText className="h-4 w-4" />
              <span>DMC</span>
            </button>

            {!isAdminLoggedIn ? (
              <button onClick={() => { setCurrentPage('admin-login'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </button>
            ) : (
              <>
                <button onClick={() => { setCurrentPage('admin-dashboard'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                  <Settings className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                <button onClick={() => { setCurrentPage('admin-search'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
                <button onClick={() => { setCurrentPage('leaving-certificate'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>Leaving Cert</span>
                </button>
                <button onClick={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); setLoginForm({ username: '', password: '' }); setIsMobileMenuOpen(false); }} className="hover:text-red-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;