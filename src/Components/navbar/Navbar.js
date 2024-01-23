import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Mobile Skins', to: 'mobileskins', subitems: ['iPhone', 'Samsung', 'OnePlus', 'POCO', 'Xiomi', 'Oppo', 'Nothing', 'Realme', 'Vivo'] },
  { name: 'Laptops Skins', to: 'LaptopSkins', subitems: ['Windows', 'MacBook'] },
  { name: 'Skin Collections', to: 'SkinCollections' },
  { name: 'Device Not Found ?', to: '#' },
  { name: 'How to Apply', href: '#', current: false },
];

const userNavigation = [
  { name: 'LogIn', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// ...

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <div className="min-h-full hidden md:block">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-20"
                        src="https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, index) => (
                          <Fragment key={item.name}>
                            <div
                              onMouseEnter={() => handleMenuEnter(index)}
                              onMouseLeave={handleMenuLeave}
                              style={{ position: 'relative', zIndex: activeMenu === index ? 10 : 'auto' }}
                            >
                              <Link

                                to={`${item.to}`}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-black',
                                  'rounded-md px-3 py-2 text-sm font-medium no-underline'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                              {item.subitems && activeMenu === index && (
                                <div>
                                  <div className="absolute mt-2 space-y-2 bg-white p-2 shadow-lg rounded-md z-10">
                                    {item.subitems.map((subitem) => (
                                      <Link
                                        //  to='iphone'
                                        to={`${subitem.toLowerCase()}`}

                                        className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md font-normal no-underline"
                                      >
                                        {subitem}
                                      </Link>
                                    ))}
                                  </div>
                                  <Outlet />
                                </div>

                              )}
                            </div>
                            <div className="-mr-2 flex md:hidden">
                              {/* Mobile menu button */}
                              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                              </Disclosure.Button>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* ... (existing code) */}
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item, index) => (
                    <Fragment key={item.name}>
                      <div
                        onMouseEnter={() => handleMenuEnter(index)}
                        onMouseLeave={handleMenuLeave}
                        style={{ position: 'relative', zIndex: activeMenu === index ? 10 : 'auto' }}
                      >
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium no-underline'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                        {item.subitems && activeMenu === index && (
                          <div className="absolute mt-2 space-y-2 bg-white p-2">
                            {item.subitems.map((subitem) => (
                              <a
                                key={subitem}
                                href={`#${subitem.toLowerCase()}`}
                                className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 no-underline"
                              >
                                {subitem}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {/* ... (existing code) */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium no-underline text-gray-900 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      {/* MObile Screeen *********************** */}
      <div className="min-h-full md:hidden">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-20"
                        src="https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={`${item.to}`}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-black',
                              'rounded-md px-3 py-2 text-sm font-medium no-underline'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={`${item.to}`}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium no-underline'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">



                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium no-underline text-gray-900 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </>
  );
}

