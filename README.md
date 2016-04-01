# has-upstart

Tells if linux [upstart](https://en.wikipedia.org/wiki/Upstart) is available.

## Usage

```js
require('@mh-cbon/has-upstart')(function (err, initctlPath) {
  console.log("This system runs upstart : %s", err?"no":"yes");
  systemCtlPath && console.log("Found initctl at path : %s", initctlPath)
})
```

## Testing

#### upstart friendly

To run the __upstart friendly__ tests on a fedora-like box,

- download and install [vagrant](https://www.vagrantup.com/)
- execute `npm run test-ubuntu`


#### upstart non friendly
To run the __upstart non friendly__ tests on a fedora-like box,

- download and install `vagrant`
- execute `npm run test-not-ubuntu`

or just

- download and install `mocha`
- `mocha test/not-ubuntu.js`

## Notes

More tests are needed on more boxes, have a look at this,
- http://unix.stackexchange.com/questions/18209/detect-init-system-using-the-shell
- http://unix.stackexchange.com/questions/196166/how-to-find-out-if-a-system-uses-sysv-upstart-or-systemd-initsystem
