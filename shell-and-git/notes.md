# Shell and Git - Notes

## Shell Basics

- in every directory there is automatically two folders - hidden and only visible when using ls -a or ls-la:
  - .
  - ..

### commands and options

- pwd = print working diary

- options always begin with - (dash), e.g. “ls -l”
- ls = list
  - shows list of files in directory
- l = long(er) list
  - shows longer list of files in directory
- ll = shortcut for “ls -l”
  -a = -all
  - shows all files in directory including hidden ones
- “-l -a” can be written as “-la”, e.g. “ls -la” instead of “ls -l -a”
- h = human readable

  - adds post-fix to infos shown when using “ls”, e.g. size: 12 becomes 12B(ytes)

- cd = change directory
  - used to navigate through file system tree
- cd .. = travel up the file tree (einen Ordner hoch)
- cd . = referencing current location
- cd ~ = shortcut go to “home”-folder
- cd = also shortcut to go to “home”-folder
- cd - = brings one back to where one has been before
- clear = clears the page of the terminal
- cat = shows content of a file

- CTRL + L = shortcut for clearing the page

- mkdir = create new folder
  - for naming always use “-” instead of “/” or “\”
- rmdir = remove empty folders
- rm = remove files
- rm -Rf = remove recursive (?)
  - removes folder with content (! super dangerous, handle carefully)
- man = show manual
  - shows manual for commands, e.g. “man ls”
  - to exit manual, use “q”
- touch = creates new file / updates timestamp on existing file
- mv = move

  - moves files
  - also used for renaming files (move into same location to a new name)

- pressing “tab” autocompletes whatever is typed; gives suggestions for path
- two ways to reference paths
  - absolute: basically writing the whole path out starting from the root
  - relative: can start from anywhere; paths relative to my current location

## Git CLI and remote

## Git Branches and PR
