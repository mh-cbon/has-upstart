# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

    config.vm.define "fedora" do |fedora|
      fedora.vm.box = "fedora/23-cloud-base"
      fedora.vm.hostname = "fedora.vagrant.dev"
      fedora.vm.network "private_network", type: :dhcp
    end

    config.vm.define "ubuntu" do |ubuntu|
      ubuntu.vm.box = "ubuntu/trusty64"
      ubuntu.vm.hostname = "ubuntu.vagrant.dev"
      ubuntu.vm.network "private_network", type: :dhcp
    end
end
