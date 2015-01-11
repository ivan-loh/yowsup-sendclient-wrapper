## yowsup sendclient demo wrapper
cause i'm too lazy to do it in python.
Runs as sort of a service, and accepts commands on a redis queue.


#### 1. Install redis-server & nodejs

```
sudo add-apt-repository -y ppa:chris-lea/redis-server
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update -y
sudo apt-get install -y nodejs redis-server
```

#### 2. Install yowsup & yowsup dependencies

```
sudo apt-get install libncurses5-dev python-dev python-pip
sudo pip install readline python-dateutil argparse
```

from https://github.com/tgalal/yowsup/wiki#installation
```
git clone https://github.com/tgalal/yowsup.git
cd yowsup
sudo python setup.py install
```

#### 3. grab whatsapp password from your android phone

you'll need to have a rooted android phone with whatsapp installed

https://play.google.com/store/apps/details?id=com.smorra.passwordextractor

the login name in config should be your phone number with the country code and the password should be a base64 encoded string obtained from the app above.

#### 4. install this.
```
npm install
node app.js
```
