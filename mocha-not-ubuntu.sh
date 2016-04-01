vagrant up fedora
vagrant ssh fedora -c "sh /vagrant/run-tests-not-ubuntu.sh"
vagrant halt fedora
