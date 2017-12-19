---
layout: post
title: Python 特殊方法
category: 理
tags:
  - 翻译
  - python
date: 2017-01-17
create: 2017-01-02
---

* `__new__(cls[,...])` 在`__init__()`之前调用。
* `__init__(self[,...])`
* `__del__(self[,...])`
* `__repr__(self)`: repr()，官方 string 表示。尽可能返回能够重建该对象的可运行的合法 Python 表达式字符串，或者返回形如"<module 'os' from '/usr/lib/python3.5/os.py'>"的字符串。
* `__str__(self)`: str(), format()，print()。返回字符串
* `__bytes__(self)`:

```
.. _specialnames:

Special method names
====================

.. index::
   pair: operator; overloading
   single: __getitem__() (mapping object method)

A class can implement certain operations that are invoked by special syntax
(such as arithmetic operations or subscripting and slicing) by defining methods
with special names. This is Python's approach to :dfn:`operator overloading`,
allowing classes to define their own behavior with respect to language
operators.  For instance, if a class defines a method named :meth:`__getitem__`,
and ``x`` is an instance of this class, then ``x[i]`` is roughly equivalent
to ``type(x).__getitem__(x, i)``.  Except where mentioned, attempts to execute an
operation raise an exception when no appropriate method is defined (typically
:exc:`AttributeError` or :exc:`TypeError`).

Setting a special method to ``None`` indicates that the corresponding
operation is not available.  For example, if a class sets
:meth:`__iter__` to ``None``, the class is not iterable, so calling
:func:`iter` on its instances will raise a :exc:`TypeError` (without
falling back to :meth:`__getitem__`). [#]_

When implementing a class that emulates any built-in type, it is important that
the emulation only be implemented to the degree that it makes sense for the
object being modelled.  For example, some sequences may work well with retrieval
of individual elements, but extracting a slice may not make sense.  (One example
of this is the :class:`~xml.dom.NodeList` interface in the W3C's Document
Object Model.)


.. _customization:

Basic customization
-------------------

.. method:: object.__new__(cls[, ...])

   .. index:: pair: subclassing; immutable types

   Called to create a new instance of class *cls*.  :meth:`__new__` is a static
   method (special-cased so you need not declare it as such) that takes the class
   of which an instance was requested as its first argument.  The remaining
   arguments are those passed to the object constructor expression (the call to the
   class).  The return value of :meth:`__new__` should be the new object instance
   (usually an instance of *cls*).

   Typical implementations create a new instance of the class by invoking the
   superclass's :meth:`__new__` method using ``super(currentclass,
   cls).__new__(cls[, ...])`` with appropriate arguments and then modifying the
   newly-created instance as necessary before returning it.

   If :meth:`__new__` returns an instance of *cls*, then the new instance's
   :meth:`__init__` method will be invoked like ``__init__(self[, ...])``, where
   *self* is the new instance and the remaining arguments are the same as were
   passed to :meth:`__new__`.

   If :meth:`__new__` does not return an instance of *cls*, then the new instance's
   :meth:`__init__` method will not be invoked.

   :meth:`__new__` is intended mainly to allow subclasses of immutable types (like
   int, str, or tuple) to customize instance creation.  It is also commonly
   overridden in custom metaclasses in order to customize class creation.


.. method:: object.__init__(self[, ...])

   .. index:: pair: class; constructor

   Called after the instance has been created (by :meth:`__new__`), but before
   it is returned to the caller.  The arguments are those passed to the
   class constructor expression.  If a base class has an :meth:`__init__`
   method, the derived class's :meth:`__init__` method, if any, must explicitly
   call it to ensure proper initialization of the base class part of the
   instance; for example: ``BaseClass.__init__(self, [args...])``.

   Because :meth:`__new__` and :meth:`__init__` work together in constructing
   objects (:meth:`__new__` to create it, and :meth:`__init__` to customize it),
   no non-``None`` value may be returned by :meth:`__init__`; doing so will
   cause a :exc:`TypeError` to be raised at runtime.


.. method:: object.__del__(self)

   .. index::
      single: destructor
      statement: del

   Called when the instance is about to be destroyed.  This is also called a
   destructor.  If a base class has a :meth:`__del__` method, the derived class's
   :meth:`__del__` method, if any, must explicitly call it to ensure proper
   deletion of the base class part of the instance.  Note that it is possible
   (though not recommended!) for the :meth:`__del__` method to postpone destruction
   of the instance by creating a new reference to it.  It may then be called at a
   later time when this new reference is deleted.  It is not guaranteed that
   :meth:`__del__` methods are called for objects that still exist when the
   interpreter exits.

   .. note::

      ``del x`` doesn't directly call ``x.__del__()`` --- the former decrements
      the reference count for ``x`` by one, and the latter is only called when
      ``x``'s reference count reaches zero.  Some common situations that may
      prevent the reference count of an object from going to zero include:
      circular references between objects (e.g., a doubly-linked list or a tree
      data structure with parent and child pointers); a reference to the object
      on the stack frame of a function that caught an exception (the traceback
      stored in ``sys.exc_info()[2]`` keeps the stack frame alive); or a
      reference to the object on the stack frame that raised an unhandled
      exception in interactive mode (the traceback stored in
      ``sys.last_traceback`` keeps the stack frame alive).  The first situation
      can only be remedied by explicitly breaking the cycles; the second can be
      resolved by freeing the reference to the traceback object when it is no
      longer useful, and the third can be resolved by storing ``None`` in
      ``sys.last_traceback``.
      Circular references which are garbage are detected and cleaned up when
      the cyclic garbage collector is enabled (it's on by default). Refer to the
      documentation for the :mod:`gc` module for more information about this
      topic.

   .. warning::

      Due to the precarious circumstances under which :meth:`__del__` methods are
      invoked, exceptions that occur during their execution are ignored, and a warning
      is printed to ``sys.stderr`` instead.  Also, when :meth:`__del__` is invoked in
      response to a module being deleted (e.g., when execution of the program is
      done), other globals referenced by the :meth:`__del__` method may already have
      been deleted or in the process of being torn down (e.g. the import
      machinery shutting down).  For this reason, :meth:`__del__` methods
      should do the absolute
      minimum needed to maintain external invariants.  Starting with version 1.5,
      Python guarantees that globals whose name begins with a single underscore are
      deleted from their module before other globals are deleted; if no other
      references to such globals exist, this may help in assuring that imported
      modules are still available at the time when the :meth:`__del__` method is
      called.

      .. index::
         single: repr() (built-in function); __repr__() (object method)


.. method:: object.__repr__(self)

   Called by the :func:`repr` built-in function to compute the "official" string
   representation of an object.  If at all possible, this should look like a
   valid Python expression that could be used to recreate an object with the
   same value (given an appropriate environment).  If this is not possible, a
   string of the form ``<...some useful description...>`` should be returned.
   The return value must be a string object. If a class defines :meth:`__repr__`
   but not :meth:`__str__`, then :meth:`__repr__` is also used when an
   "informal" string representation of instances of that class is required.

   This is typically used for debugging, so it is important that the representation
   is information-rich and unambiguous.

   .. index::
      single: string; __str__() (object method)
      single: format() (built-in function); __str__() (object method)
      single: print() (built-in function); __str__() (object method)


.. method:: object.__str__(self)

   Called by :func:`str(object) <str>` and the built-in functions
   :func:`format` and :func:`print` to compute the "informal" or nicely
   printable string representation of an object.  The return value must be a
   :ref:`string <textseq>` object.

   This method differs from :meth:`object.__repr__` in that there is no
   expectation that :meth:`__str__` return a valid Python expression: a more
   convenient or concise representation can be used.

   The default implementation defined by the built-in type :class:`object`
   calls :meth:`object.__repr__`.

   .. XXX what about subclasses of string?


.. method:: object.__bytes__(self)

   .. index:: builtin: bytes

   Called by :func:`bytes` to compute a byte-string representation of an
   object. This should return a ``bytes`` object.

   .. index::
      single: string; __format__() (object method)
      pair: string; conversion
      builtin: print


.. method:: object.__format__(self, format_spec)

   Called by the :func:`format` built-in function,
   and by extension, evaluation of :ref:`formatted string literals
   <f-strings>` and the :meth:`str.format` method, to produce a "formatted"
   string representation of an object. The ``format_spec`` argument is
   a string that contains a description of the formatting options desired.
   The interpretation of the ``format_spec`` argument is up to the type
   implementing :meth:`__format__`, however most classes will either
   delegate formatting to one of the built-in types, or use a similar
   formatting option syntax.

   See :ref:`formatspec` for a description of the standard formatting syntax.

   The return value must be a string object.

   .. versionchanged:: 3.4
      The __format__ method of ``object`` itself raises a :exc:`TypeError`
      if passed any non-empty string.


.. _richcmpfuncs:
.. method:: object.__lt__(self, other)
            object.__le__(self, other)
            object.__eq__(self, other)
            object.__ne__(self, other)
            object.__gt__(self, other)
            object.__ge__(self, other)

   .. index::
      single: comparisons

   These are the so-called "rich comparison" methods. The correspondence between
   operator symbols and method names is as follows: ``x<y`` calls ``x.__lt__(y)``,
   ``x<=y`` calls ``x.__le__(y)``, ``x==y`` calls ``x.__eq__(y)``, ``x!=y`` calls
   ``x.__ne__(y)``, ``x>y`` calls ``x.__gt__(y)``, and ``x>=y`` calls
   ``x.__ge__(y)``.

   A rich comparison method may return the singleton ``NotImplemented`` if it does
   not implement the operation for a given pair of arguments. By convention,
   ``False`` and ``True`` are returned for a successful comparison. However, these
   methods can return any value, so if the comparison operator is used in a Boolean
   context (e.g., in the condition of an ``if`` statement), Python will call
   :func:`bool` on the value to determine if the result is true or false.

   By default, :meth:`__ne__` delegates to :meth:`__eq__` and
   inverts the result unless it is ``NotImplemented``.  There are no other
   implied relationships among the comparison operators, for example,
   the truth of ``(x<y or x==y)`` does not imply ``x<=y``.
   To automatically generate ordering operations from a single root operation,
   see :func:`functools.total_ordering`.

   See the paragraph on :meth:`__hash__` for
   some important notes on creating :term:`hashable` objects which support
   custom comparison operations and are usable as dictionary keys.

   There are no swapped-argument versions of these methods (to be used when the
   left argument does not support the operation but the right argument does);
   rather, :meth:`__lt__` and :meth:`__gt__` are each other's reflection,
   :meth:`__le__` and :meth:`__ge__` are each other's reflection, and
   :meth:`__eq__` and :meth:`__ne__` are their own reflection.
   If the operands are of different types, and right operand's type is
   a direct or indirect subclass of the left operand's type,
   the reflected method of the right operand has priority, otherwise
   the left operand's method has priority.  Virtual subclassing is
   not considered.

.. method:: object.__hash__(self)

   .. index::
      object: dictionary
      builtin: hash

   Called by built-in function :func:`hash` and for operations on members of
   hashed collections including :class:`set`, :class:`frozenset`, and
   :class:`dict`.  :meth:`__hash__` should return an integer. The only required
   property is that objects which compare equal have the same hash value; it is
   advised to mix together the hash values of the components of the object that
   also play a part in comparison of objects by packing them into a tuple and
   hashing the tuple. Example::

       def __hash__(self):
           return hash((self.name, self.nick, self.color))

   .. note::

     :func:`hash` truncates the value returned from an object's custom
     :meth:`__hash__` method to the size of a :c:type:`Py_ssize_t`.  This is
     typically 8 bytes on 64-bit builds and 4 bytes on 32-bit builds.  If an
     object's   :meth:`__hash__` must interoperate on builds of different bit
     sizes, be sure to check the width on all supported builds.  An easy way
     to do this is with
     ``python -c "import sys; print(sys.hash_info.width)"``.

   If a class does not define an :meth:`__eq__` method it should not define a
   :meth:`__hash__` operation either; if it defines :meth:`__eq__` but not
   :meth:`__hash__`, its instances will not be usable as items in hashable
   collections.  If a class defines mutable objects and implements an
   :meth:`__eq__` method, it should not implement :meth:`__hash__`, since the
   implementation of hashable collections requires that a key's hash value is
   immutable (if the object's hash value changes, it will be in the wrong hash
   bucket).

   User-defined classes have :meth:`__eq__` and :meth:`__hash__` methods
   by default; with them, all objects compare unequal (except with themselves)
   and ``x.__hash__()`` returns an appropriate value such that ``x == y``
   implies both that ``x is y`` and ``hash(x) == hash(y)``.

   A class that overrides :meth:`__eq__` and does not define :meth:`__hash__`
   will have its :meth:`__hash__` implicitly set to ``None``.  When the
   :meth:`__hash__` method of a class is ``None``, instances of the class will
   raise an appropriate :exc:`TypeError` when a program attempts to retrieve
   their hash value, and will also be correctly identified as unhashable when
   checking ``isinstance(obj, collections.Hashable)``.

   If a class that overrides :meth:`__eq__` needs to retain the implementation
   of :meth:`__hash__` from a parent class, the interpreter must be told this
   explicitly by setting ``__hash__ = <ParentClass>.__hash__``.

   If a class that does not override :meth:`__eq__` wishes to suppress hash
   support, it should include ``__hash__ = None`` in the class definition.
   A class which defines its own :meth:`__hash__` that explicitly raises
   a :exc:`TypeError` would be incorrectly identified as hashable by
   an ``isinstance(obj, collections.Hashable)`` call.


   .. note::

      By default, the :meth:`__hash__` values of str, bytes and datetime
      objects are "salted" with an unpredictable random value.  Although they
      remain constant within an individual Python process, they are not
      predictable between repeated invocations of Python.

      This is intended to provide protection against a denial-of-service caused
      by carefully-chosen inputs that exploit the worst case performance of a
      dict insertion, O(n^2) complexity.  See
      http://www.ocert.org/advisories/ocert-2011-003.html for details.

      Changing hash values affects the iteration order of dicts, sets and
      other mappings.  Python has never made guarantees about this ordering
      (and it typically varies between 32-bit and 64-bit builds).

      See also :envvar:`PYTHONHASHSEED`.

   .. versionchanged:: 3.3
      Hash randomization is enabled by default.


.. method:: object.__bool__(self)

   .. index:: single: __len__() (mapping object method)

   Called to implement truth value testing and the built-in operation
   ``bool()``; should return ``False`` or ``True``.  When this method is not
   defined, :meth:`__len__` is called, if it is defined, and the object is
   considered true if its result is nonzero.  If a class defines neither
   :meth:`__len__` nor :meth:`__bool__`, all its instances are considered
   true.


.. _attribute-access:

Customizing attribute access
----------------------------

The following methods can be defined to customize the meaning of attribute
access (use of, assignment to, or deletion of ``x.name``) for class instances.

.. XXX explain how descriptors interfere here!


.. method:: object.__getattr__(self, name)

   Called when an attribute lookup has not found the attribute in the usual places
   (i.e. it is not an instance attribute nor is it found in the class tree for
   ``self``).  ``name`` is the attribute name. This method should return the
   (computed) attribute value or raise an :exc:`AttributeError` exception.

   Note that if the attribute is found through the normal mechanism,
   :meth:`__getattr__` is not called.  (This is an intentional asymmetry between
   :meth:`__getattr__` and :meth:`__setattr__`.) This is done both for efficiency
   reasons and because otherwise :meth:`__getattr__` would have no way to access
   other attributes of the instance.  Note that at least for instance variables,
   you can fake total control by not inserting any values in the instance attribute
   dictionary (but instead inserting them in another object).  See the
   :meth:`__getattribute__` method below for a way to actually get total control
   over attribute access.


.. method:: object.__getattribute__(self, name)

   Called unconditionally to implement attribute accesses for instances of the
   class. If the class also defines :meth:`__getattr__`, the latter will not be
   called unless :meth:`__getattribute__` either calls it explicitly or raises an
   :exc:`AttributeError`. This method should return the (computed) attribute value
   or raise an :exc:`AttributeError` exception. In order to avoid infinite
   recursion in this method, its implementation should always call the base class
   method with the same name to access any attributes it needs, for example,
   ``object.__getattribute__(self, name)``.

   .. note::

      This method may still be bypassed when looking up special methods as the
      result of implicit invocation via language syntax or built-in functions.
      See :ref:`special-lookup`.


.. method:: object.__setattr__(self, name, value)

   Called when an attribute assignment is attempted.  This is called instead of
   the normal mechanism (i.e. store the value in the instance dictionary).
   *name* is the attribute name, *value* is the value to be assigned to it.

   If :meth:`__setattr__` wants to assign to an instance attribute, it should
   call the base class method with the same name, for example,
   ``object.__setattr__(self, name, value)``.


.. method:: object.__delattr__(self, name)

   Like :meth:`__setattr__` but for attribute deletion instead of assignment.  This
   should only be implemented if ``del obj.name`` is meaningful for the object.


.. method:: object.__dir__(self)

   Called when :func:`dir` is called on the object. A sequence must be
   returned. :func:`dir` converts the returned sequence to a list and sorts it.


.. _descriptors:

Implementing Descriptors
^^^^^^^^^^^^^^^^^^^^^^^^

The following methods only apply when an instance of the class containing the
method (a so-called *descriptor* class) appears in an *owner* class (the
descriptor must be in either the owner's class dictionary or in the class
dictionary for one of its parents).  In the examples below, "the attribute"
refers to the attribute whose name is the key of the property in the owner
class' :attr:`~object.__dict__`.


.. method:: object.__get__(self, instance, owner)

   Called to get the attribute of the owner class (class attribute access) or of an
   instance of that class (instance attribute access). *owner* is always the owner
   class, while *instance* is the instance that the attribute was accessed through,
   or ``None`` when the attribute is accessed through the *owner*.  This method
   should return the (computed) attribute value or raise an :exc:`AttributeError`
   exception.


.. method:: object.__set__(self, instance, value)

   Called to set the attribute on an instance *instance* of the owner class to a
   new value, *value*.


.. method:: object.__delete__(self, instance)

   Called to delete the attribute on an instance *instance* of the owner class.


.. method:: object.__set_name__(self, owner, name)

   Called at the time the owning class *owner* is created. The
   descriptor has been assigned to *name*.

   .. versionadded:: 3.6


The attribute :attr:`__objclass__` is interpreted by the :mod:`inspect` module
as specifying the class where this object was defined (setting this
appropriately can assist in runtime introspection of dynamic class attributes).
For callables, it may indicate that an instance of the given type (or a
subclass) is expected or required as the first positional argument (for example,
CPython sets this attribute for unbound methods that are implemented in C).


.. _descriptor-invocation:

Invoking Descriptors
^^^^^^^^^^^^^^^^^^^^

In general, a descriptor is an object attribute with "binding behavior", one
whose attribute access has been overridden by methods in the descriptor
protocol:  :meth:`__get__`, :meth:`__set__`, and :meth:`__delete__`. If any of
those methods are defined for an object, it is said to be a descriptor.

The default behavior for attribute access is to get, set, or delete the
attribute from an object's dictionary. For instance, ``a.x`` has a lookup chain
starting with ``a.__dict__['x']``, then ``type(a).__dict__['x']``, and
continuing through the base classes of ``type(a)`` excluding metaclasses.

However, if the looked-up value is an object defining one of the descriptor
methods, then Python may override the default behavior and invoke the descriptor
method instead.  Where this occurs in the precedence chain depends on which
descriptor methods were defined and how they were called.

The starting point for descriptor invocation is a binding, ``a.x``. How the
arguments are assembled depends on ``a``:

Direct Call
   The simplest and least common call is when user code directly invokes a
   descriptor method:    ``x.__get__(a)``.

Instance Binding
   If binding to an object instance, ``a.x`` is transformed into the call:
   ``type(a).__dict__['x'].__get__(a, type(a))``.

Class Binding
   If binding to a class, ``A.x`` is transformed into the call:
   ``A.__dict__['x'].__get__(None, A)``.

Super Binding
   If ``a`` is an instance of :class:`super`, then the binding ``super(B,
   obj).m()`` searches ``obj.__class__.__mro__`` for the base class ``A``
   immediately preceding ``B`` and then invokes the descriptor with the call:
   ``A.__dict__['m'].__get__(obj, obj.__class__)``.

For instance bindings, the precedence of descriptor invocation depends on the
which descriptor methods are defined.  A descriptor can define any combination
of :meth:`__get__`, :meth:`__set__` and :meth:`__delete__`.  If it does not
define :meth:`__get__`, then accessing the attribute will return the descriptor
object itself unless there is a value in the object's instance dictionary.  If
the descriptor defines :meth:`__set__` and/or :meth:`__delete__`, it is a data
descriptor; if it defines neither, it is a non-data descriptor.  Normally, data
descriptors define both :meth:`__get__` and :meth:`__set__`, while non-data
descriptors have just the :meth:`__get__` method.  Data descriptors with
:meth:`__set__` and :meth:`__get__` defined always override a redefinition in an
instance dictionary.  In contrast, non-data descriptors can be overridden by
instances.

Python methods (including :func:`staticmethod` and :func:`classmethod`) are
implemented as non-data descriptors.  Accordingly, instances can redefine and
override methods.  This allows individual instances to acquire behaviors that
differ from other instances of the same class.

The :func:`property` function is implemented as a data descriptor. Accordingly,
instances cannot override the behavior of a property.


.. _slots:

__slots__
^^^^^^^^^

By default, instances of classes have a dictionary for attribute storage.  This
wastes space for objects having very few instance variables.  The space
consumption can become acute when creating large numbers of instances.

The default can be overridden by defining *__slots__* in a class definition.
The *__slots__* declaration takes a sequence of instance variables and reserves
just enough space in each instance to hold a value for each variable.  Space is
saved because *__dict__* is not created for each instance.


.. data:: object.__slots__

   This class variable can be assigned a string, iterable, or sequence of
   strings with variable names used by instances.  *__slots__* reserves space
   for the declared variables and prevents the automatic creation of *__dict__*
   and *__weakref__* for each instance.


Notes on using *__slots__*
""""""""""""""""""""""""""

* When inheriting from a class without *__slots__*, the *__dict__* attribute of
  that class will always be accessible, so a *__slots__* definition in the
  subclass is meaningless.

* Without a *__dict__* variable, instances cannot be assigned new variables not
  listed in the *__slots__* definition.  Attempts to assign to an unlisted
  variable name raises :exc:`AttributeError`. If dynamic assignment of new
  variables is desired, then add ``'__dict__'`` to the sequence of strings in
  the *__slots__* declaration.

* Without a *__weakref__* variable for each instance, classes defining
  *__slots__* do not support weak references to its instances. If weak reference
  support is needed, then add ``'__weakref__'`` to the sequence of strings in the
  *__slots__* declaration.

* *__slots__* are implemented at the class level by creating descriptors
  (:ref:`descriptors`) for each variable name.  As a result, class attributes
  cannot be used to set default values for instance variables defined by
  *__slots__*; otherwise, the class attribute would overwrite the descriptor
  assignment.

* The action of a *__slots__* declaration is limited to the class where it is
  defined.  As a result, subclasses will have a *__dict__* unless they also define
  *__slots__* (which must only contain names of any *additional* slots).

* If a class defines a slot also defined in a base class, the instance variable
  defined by the base class slot is inaccessible (except by retrieving its
  descriptor directly from the base class). This renders the meaning of the
  program undefined.  In the future, a check may be added to prevent this.

* Nonempty *__slots__* does not work for classes derived from "variable-length"
  built-in types such as :class:`int`, :class:`bytes` and :class:`tuple`.

* Any non-string iterable may be assigned to *__slots__*. Mappings may also be
  used; however, in the future, special meaning may be assigned to the values
  corresponding to each key.

* *__class__* assignment works only if both classes have the same *__slots__*.


.. _class-customization:

Customizing class creation
--------------------------

Whenever a class inherits from another class, *__init_subclass__* is
called on that class. This way, it is possible to write classes which
change the behavior of subclasses. This is closely related to class
decorators, but where class decorators only affect the specific class they're
applied to, ``__init_subclass__`` solely applies to future subclasses of the
class defining the method.

.. classmethod:: object.__init_subclass__(cls)

   This method is called whenever the containing class is subclassed.
   *cls* is then the new subclass. If defined as a normal instance method,
   this method is implicitly converted to a class method.

   Keyword arguments which are given to a new class are passed to
   the parent's class ``__init_subclass__``. For compatibility with
   other classes using ``__init_subclass__``, one should take out the
   needed keyword arguments and pass the others over to the base
   class, as in::

       class Philosopher:
           def __init_subclass__(cls, default_name, **kwargs):
               super().__init_subclass__(**kwargs)
               cls.default_name = default_name

       class AustralianPhilosopher(Philosopher, default_name="Bruce"):
           pass

   The default implementation ``object.__init_subclass__`` does
   nothing, but raises an error if it is called with any arguments.

   .. note::

      The metaclass hint ``metaclass`` is consumed by the rest of the type
      machinery, and is never passed to ``__init_subclass__`` implementations.
      The actual metaclass (rather than the explicit hint) can be accessed as
      ``type(cls)``.

   .. versionadded:: 3.6


.. _metaclasses:

Metaclasses
^^^^^^^^^^^

.. index::
    single: metaclass
    builtin: type

By default, classes are constructed using :func:`type`. The class body is
executed in a new namespace and the class name is bound locally to the
result of ``type(name, bases, namespace)``.

The class creation process can be customized by passing the ``metaclass``
keyword argument in the class definition line, or by inheriting from an
existing class that included such an argument. In the following example,
both ``MyClass`` and ``MySubclass`` are instances of ``Meta``::

   class Meta(type):
       pass

   class MyClass(metaclass=Meta):
       pass

   class MySubclass(MyClass):
       pass

Any other keyword arguments that are specified in the class definition are
passed through to all metaclass operations described below.

When a class definition is executed, the following steps occur:

* the appropriate metaclass is determined
* the class namespace is prepared
* the class body is executed
* the class object is created

Determining the appropriate metaclass
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. index::
    single: metaclass hint

The appropriate metaclass for a class definition is determined as follows:

* if no bases and no explicit metaclass are given, then :func:`type` is used
* if an explicit metaclass is given and it is *not* an instance of
  :func:`type`, then it is used directly as the metaclass
* if an instance of :func:`type` is given as the explicit metaclass, or
  bases are defined, then the most derived metaclass is used

The most derived metaclass is selected from the explicitly specified
metaclass (if any) and the metaclasses (i.e. ``type(cls)``) of all specified
base classes. The most derived metaclass is one which is a subtype of *all*
of these candidate metaclasses. If none of the candidate metaclasses meets
that criterion, then the class definition will fail with ``TypeError``.


.. _prepare:

Preparing the class namespace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. index::
    single: __prepare__ (metaclass method)

Once the appropriate metaclass has been identified, then the class namespace
is prepared. If the metaclass has a ``__prepare__`` attribute, it is called
as ``namespace = metaclass.__prepare__(name, bases, **kwds)`` (where the
additional keyword arguments, if any, come from the class definition).

If the metaclass has no ``__prepare__`` attribute, then the class namespace
is initialised as an empty ordered mapping.

.. seealso::

   :pep:`3115` - Metaclasses in Python 3000
      Introduced the ``__prepare__`` namespace hook


Executing the class body
^^^^^^^^^^^^^^^^^^^^^^^^

.. index::
    single: class; body

The class body is executed (approximately) as
``exec(body, globals(), namespace)``. The key difference from a normal
call to :func:`exec` is that lexical scoping allows the class body (including
any methods) to reference names from the current and outer scopes when the
class definition occurs inside a function.

However, even when the class definition occurs inside the function, methods
defined inside the class still cannot see names defined at the class scope.
Class variables must be accessed through the first parameter of instance or
class methods, or through the implicit lexically scoped ``__class__`` reference
described in the next section.

.. _class-object-creation:

Creating the class object
^^^^^^^^^^^^^^^^^^^^^^^^^

.. index::
    single: __class__ (method cell)
    single: __classcell__ (class namespace entry)


Once the class namespace has been populated by executing the class body,
the class object is created by calling
``metaclass(name, bases, namespace, **kwds)`` (the additional keywords
passed here are the same as those passed to ``__prepare__``).

This class object is the one that will be referenced by the zero-argument
form of :func:`super`. ``__class__`` is an implicit closure reference
created by the compiler if any methods in a class body refer to either
``__class__`` or ``super``. This allows the zero argument form of
:func:`super` to correctly identify the class being defined based on
lexical scoping, while the class or instance that was used to make the
current call is identified based on the first argument passed to the method.

.. impl-detail::

   In CPython 3.6 and later, the ``__class__`` cell is passed to the metaclass
   as a ``__classcell__`` entry in the class namespace. If present, this must
   be propagated up to the ``type.__new__`` call in order for the class to be
   initialised correctly.
   Failing to do so will result in a :exc:`DeprecationWarning` in Python 3.6,
   and a :exc:`RuntimeWarning` in the future.

When using the default metaclass :class:`type`, or any metaclass that ultimately
calls ``type.__new__``, the following additional customisation steps are
invoked after creating the class object:

* first, ``type.__new__`` collects all of the descriptors in the class
  namespace that define a :meth:`~object.__set_name__` method;
* second, all of these ``__set_name__`` methods are called with the class
  being defined and the assigned name of that particular descriptor; and
* finally, the :meth:`~object.__init_subclass__` hook is called on the
  immediate parent of the new class in its method resolution order.

After the class object is created, it is passed to the class decorators
included in the class definition (if any) and the resulting object is bound
in the local namespace as the defined class.

When a new class is created by ``type.__new__``, the object provided as the
namespace parameter is copied to a new ordered mapping and the original
object is discarded. The new copy is wrapped in a read-only proxy, which
becomes the :attr:`~object.__dict__` attribute of the class object.

.. seealso::

   :pep:`3135` - New super
      Describes the implicit ``__class__`` closure reference


Metaclass example
^^^^^^^^^^^^^^^^^

The potential uses for metaclasses are boundless. Some ideas that have been
explored include logging, interface checking, automatic delegation, automatic
property creation, proxies, frameworks, and automatic resource
locking/synchronization.

Here is an example of a metaclass that uses an :class:`collections.OrderedDict`
to remember the order that class variables are defined::

    class OrderedClass(type):

        @classmethod
        def __prepare__(metacls, name, bases, **kwds):
            return collections.OrderedDict()

        def __new__(cls, name, bases, namespace, **kwds):
            result = type.__new__(cls, name, bases, dict(namespace))
            result.members = tuple(namespace)
            return result

    class A(metaclass=OrderedClass):
        def one(self): pass
        def two(self): pass
        def three(self): pass
        def four(self): pass

    >>> A.members
    ('__module__', 'one', 'two', 'three', 'four')

When the class definition for *A* gets executed, the process begins with
calling the metaclass's :meth:`__prepare__` method which returns an empty
:class:`collections.OrderedDict`.  That mapping records the methods and
attributes of *A* as they are defined within the body of the class statement.
Once those definitions are executed, the ordered dictionary is fully populated
and the metaclass's :meth:`__new__` method gets invoked.  That method builds
the new type and it saves the ordered dictionary keys in an attribute
called ``members``.


Customizing instance and subclass checks
----------------------------------------

The following methods are used to override the default behavior of the
:func:`isinstance` and :func:`issubclass` built-in functions.

In particular, the metaclass :class:`abc.ABCMeta` implements these methods in
order to allow the addition of Abstract Base Classes (ABCs) as "virtual base
classes" to any class or type (including built-in types), including other
ABCs.

.. method:: class.__instancecheck__(self, instance)

   Return true if *instance* should be considered a (direct or indirect)
   instance of *class*. If defined, called to implement ``isinstance(instance,
   class)``.


.. method:: class.__subclasscheck__(self, subclass)

   Return true if *subclass* should be considered a (direct or indirect)
   subclass of *class*.  If defined, called to implement ``issubclass(subclass,
   class)``.


Note that these methods are looked up on the type (metaclass) of a class.  They
cannot be defined as class methods in the actual class.  This is consistent with
the lookup of special methods that are called on instances, only in this
case the instance is itself a class.

.. seealso::

   :pep:`3119` - Introducing Abstract Base Classes
      Includes the specification for customizing :func:`isinstance` and
      :func:`issubclass` behavior through :meth:`~class.__instancecheck__` and
      :meth:`~class.__subclasscheck__`, with motivation for this functionality
      in the context of adding Abstract Base Classes (see the :mod:`abc`
      module) to the language.


.. _callable-types:

Emulating callable objects
--------------------------


.. method:: object.__call__(self[, args...])

   .. index:: pair: call; instance

   Called when the instance is "called" as a function; if this method is defined,
   ``x(arg1, arg2, ...)`` is a shorthand for ``x.__call__(arg1, arg2, ...)``.


.. _sequence-types:

Emulating container types
-------------------------

The following methods can be defined to implement container objects.  Containers
usually are sequences (such as lists or tuples) or mappings (like dictionaries),
but can represent other containers as well.  The first set of methods is used
either to emulate a sequence or to emulate a mapping; the difference is that for
a sequence, the allowable keys should be the integers *k* for which ``0 <= k <
N`` where *N* is the length of the sequence, or slice objects, which define a
range of items.  It is also recommended that mappings provide the methods
:meth:`keys`, :meth:`values`, :meth:`items`, :meth:`get`, :meth:`clear`,
:meth:`setdefault`, :meth:`pop`, :meth:`popitem`, :meth:`!copy`, and
:meth:`update` behaving similar to those for Python's standard dictionary
objects.  The :mod:`collections` module provides a
:class:`~collections.abc.MutableMapping`
abstract base class to help create those methods from a base set of
:meth:`__getitem__`, :meth:`__setitem__`, :meth:`__delitem__`, and :meth:`keys`.
Mutable sequences should provide methods :meth:`append`, :meth:`count`,
:meth:`index`, :meth:`extend`, :meth:`insert`, :meth:`pop`, :meth:`remove`,
:meth:`reverse` and :meth:`sort`, like Python standard list objects.  Finally,
sequence types should implement addition (meaning concatenation) and
multiplication (meaning repetition) by defining the methods :meth:`__add__`,
:meth:`__radd__`, :meth:`__iadd__`, :meth:`__mul__`, :meth:`__rmul__` and
:meth:`__imul__` described below; they should not define other numerical
operators.  It is recommended that both mappings and sequences implement the
:meth:`__contains__` method to allow efficient use of the ``in`` operator; for
mappings, ``in`` should search the mapping's keys; for sequences, it should
search through the values.  It is further recommended that both mappings and
sequences implement the :meth:`__iter__` method to allow efficient iteration
through the container; for mappings, :meth:`__iter__` should be the same as
:meth:`keys`; for sequences, it should iterate through the values.

.. method:: object.__len__(self)

   .. index::
      builtin: len
      single: __bool__() (object method)

   Called to implement the built-in function :func:`len`.  Should return the length
   of the object, an integer ``>=`` 0.  Also, an object that doesn't define a
   :meth:`__bool__` method and whose :meth:`__len__` method returns zero is
   considered to be false in a Boolean context.


.. method:: object.__length_hint__(self)

   Called to implement :func:`operator.length_hint`. Should return an estimated
   length for the object (which may be greater or less than the actual length).
   The length must be an integer ``>=`` 0. This method is purely an
   optimization and is never required for correctness.

   .. versionadded:: 3.4

.. note::

   Slicing is done exclusively with the following three methods.  A call like ::

      a[1:2] = b

   is translated to ::

      a[slice(1, 2, None)] = b

   and so forth.  Missing slice items are always filled in with ``None``.


.. method:: object.__getitem__(self, key)

   .. index:: object: slice

   Called to implement evaluation of ``self[key]``. For sequence types, the
   accepted keys should be integers and slice objects.  Note that the special
   interpretation of negative indexes (if the class wishes to emulate a sequence
   type) is up to the :meth:`__getitem__` method. If *key* is of an inappropriate
   type, :exc:`TypeError` may be raised; if of a value outside the set of indexes
   for the sequence (after any special interpretation of negative values),
   :exc:`IndexError` should be raised. For mapping types, if *key* is missing (not
   in the container), :exc:`KeyError` should be raised.

   .. note::

      :keyword:`for` loops expect that an :exc:`IndexError` will be raised for illegal
      indexes to allow proper detection of the end of the sequence.


.. method:: object.__missing__(self, key)

   Called by :class:`dict`\ .\ :meth:`__getitem__` to implement ``self[key]`` for dict subclasses
   when key is not in the dictionary.


.. method:: object.__setitem__(self, key, value)

   Called to implement assignment to ``self[key]``.  Same note as for
   :meth:`__getitem__`.  This should only be implemented for mappings if the
   objects support changes to the values for keys, or if new keys can be added, or
   for sequences if elements can be replaced.  The same exceptions should be raised
   for improper *key* values as for the :meth:`__getitem__` method.


.. method:: object.__delitem__(self, key)

   Called to implement deletion of ``self[key]``.  Same note as for
   :meth:`__getitem__`.  This should only be implemented for mappings if the
   objects support removal of keys, or for sequences if elements can be removed
   from the sequence.  The same exceptions should be raised for improper *key*
   values as for the :meth:`__getitem__` method.


.. method:: object.__iter__(self)

   This method is called when an iterator is required for a container. This method
   should return a new iterator object that can iterate over all the objects in the
   container.  For mappings, it should iterate over the keys of the container.

   Iterator objects also need to implement this method; they are required to return
   themselves.  For more information on iterator objects, see :ref:`typeiter`.


.. method:: object.__reversed__(self)

   Called (if present) by the :func:`reversed` built-in to implement
   reverse iteration.  It should return a new iterator object that iterates
   over all the objects in the container in reverse order.

   If the :meth:`__reversed__` method is not provided, the :func:`reversed`
   built-in will fall back to using the sequence protocol (:meth:`__len__` and
   :meth:`__getitem__`).  Objects that support the sequence protocol should
   only provide :meth:`__reversed__` if they can provide an implementation
   that is more efficient than the one provided by :func:`reversed`.


The membership test operators (:keyword:`in` and :keyword:`not in`) are normally
implemented as an iteration through a sequence.  However, container objects can
supply the following special method with a more efficient implementation, which
also does not require the object be a sequence.

.. method:: object.__contains__(self, item)

   Called to implement membership test operators.  Should return true if *item*
   is in *self*, false otherwise.  For mapping objects, this should consider the
   keys of the mapping rather than the values or the key-item pairs.

   For objects that don't define :meth:`__contains__`, the membership test first
   tries iteration via :meth:`__iter__`, then the old sequence iteration
   protocol via :meth:`__getitem__`, see :ref:`this section in the language
   reference <membership-test-details>`.


.. _numeric-types:

Emulating numeric types
-----------------------

The following methods can be defined to emulate numeric objects. Methods
corresponding to operations that are not supported by the particular kind of
number implemented (e.g., bitwise operations for non-integral numbers) should be
left undefined.


.. method:: object.__add__(self, other)
            object.__sub__(self, other)
            object.__mul__(self, other)
            object.__matmul__(self, other)
            object.__truediv__(self, other)
            object.__floordiv__(self, other)
            object.__mod__(self, other)
            object.__divmod__(self, other)
            object.__pow__(self, other[, modulo])
            object.__lshift__(self, other)
            object.__rshift__(self, other)
            object.__and__(self, other)
            object.__xor__(self, other)
            object.__or__(self, other)

   .. index::
      builtin: divmod
      builtin: pow
      builtin: pow

   These methods are called to implement the binary arithmetic operations
   (``+``, ``-``, ``*``, ``@``, ``/``, ``//``, ``%``, :func:`divmod`,
   :func:`pow`, ``**``, ``<<``, ``>>``, ``&``, ``^``, ``|``).  For instance, to
   evaluate the expression ``x + y``, where *x* is an instance of a class that
   has an :meth:`__add__` method, ``x.__add__(y)`` is called.  The
   :meth:`__divmod__` method should be the equivalent to using
   :meth:`__floordiv__` and :meth:`__mod__`; it should not be related to
   :meth:`__truediv__`.  Note that :meth:`__pow__` should be defined to accept
   an optional third argument if the ternary version of the built-in :func:`pow`
   function is to be supported.

   If one of those methods does not support the operation with the supplied
   arguments, it should return ``NotImplemented``.


.. method:: object.__radd__(self, other)
            object.__rsub__(self, other)
            object.__rmul__(self, other)
            object.__rmatmul__(self, other)
            object.__rtruediv__(self, other)
            object.__rfloordiv__(self, other)
            object.__rmod__(self, other)
            object.__rdivmod__(self, other)
            object.__rpow__(self, other)
            object.__rlshift__(self, other)
            object.__rrshift__(self, other)
            object.__rand__(self, other)
            object.__rxor__(self, other)
            object.__ror__(self, other)

   .. index::
      builtin: divmod
      builtin: pow

   These methods are called to implement the binary arithmetic operations
   (``+``, ``-``, ``*``, ``@``, ``/``, ``//``, ``%``, :func:`divmod`,
   :func:`pow`, ``**``, ``<<``, ``>>``, ``&``, ``^``, ``|``) with reflected
   (swapped) operands.  These functions are only called if the left operand does
   not support the corresponding operation [#]_ and the operands are of different
   types. [#]_ For instance, to evaluate the expression ``x - y``, where *y* is
   an instance of a class that has an :meth:`__rsub__` method, ``y.__rsub__(x)``
   is called if ``x.__sub__(y)`` returns *NotImplemented*.

   .. index:: builtin: pow

   Note that ternary :func:`pow` will not try calling :meth:`__rpow__` (the
   coercion rules would become too complicated).

   .. note::

      If the right operand's type is a subclass of the left operand's type and that
      subclass provides the reflected method for the operation, this method will be
      called before the left operand's non-reflected method.  This behavior allows
      subclasses to override their ancestors' operations.


.. method:: object.__iadd__(self, other)
            object.__isub__(self, other)
            object.__imul__(self, other)
            object.__imatmul__(self, other)
            object.__itruediv__(self, other)
            object.__ifloordiv__(self, other)
            object.__imod__(self, other)
            object.__ipow__(self, other[, modulo])
            object.__ilshift__(self, other)
            object.__irshift__(self, other)
            object.__iand__(self, other)
            object.__ixor__(self, other)
            object.__ior__(self, other)

   These methods are called to implement the augmented arithmetic assignments
   (``+=``, ``-=``, ``*=``, ``@=``, ``/=``, ``//=``, ``%=``, ``**=``, ``<<=``,
   ``>>=``, ``&=``, ``^=``, ``|=``).  These methods should attempt to do the
   operation in-place (modifying *self*) and return the result (which could be,
   but does not have to be, *self*).  If a specific method is not defined, the
   augmented assignment falls back to the normal methods.  For instance, if *x*
   is an instance of a class with an :meth:`__iadd__` method, ``x += y`` is
   equivalent to ``x = x.__iadd__(y)`` . Otherwise, ``x.__add__(y)`` and
   ``y.__radd__(x)`` are considered, as with the evaluation of ``x + y``. In
   certain situations, augmented assignment can result in unexpected errors (see
   :ref:`faq-augmented-assignment-tuple-error`), but this behavior is in fact
   part of the data model.


.. method:: object.__neg__(self)
            object.__pos__(self)
            object.__abs__(self)
            object.__invert__(self)

   .. index:: builtin: abs

   Called to implement the unary arithmetic operations (``-``, ``+``, :func:`abs`
   and ``~``).


.. method:: object.__complex__(self)
            object.__int__(self)
            object.__float__(self)
            object.__round__(self, [,n])

   .. index::
      builtin: complex
      builtin: int
      builtin: float
      builtin: round

   Called to implement the built-in functions :func:`complex`,
   :func:`int`, :func:`float` and :func:`round`.  Should return a value
   of the appropriate type.


.. method:: object.__index__(self)

   Called to implement :func:`operator.index`, and whenever Python needs to
   losslessly convert the numeric object to an integer object (such as in
   slicing, or in the built-in :func:`bin`, :func:`hex` and :func:`oct`
   functions). Presence of this method indicates that the numeric object is
   an integer type.  Must return an integer.

   .. note::

      In order to have a coherent integer type class, when :meth:`__index__` is
      defined :meth:`__int__` should also be defined, and both should return
      the same value.


.. _context-managers:

With Statement Context Managers
-------------------------------

A :dfn:`context manager` is an object that defines the runtime context to be
established when executing a :keyword:`with` statement. The context manager
handles the entry into, and the exit from, the desired runtime context for the
execution of the block of code.  Context managers are normally invoked using the
:keyword:`with` statement (described in section :ref:`with`), but can also be
used by directly invoking their methods.

.. index::
   statement: with
   single: context manager

Typical uses of context managers include saving and restoring various kinds of
global state, locking and unlocking resources, closing opened files, etc.

For more information on context managers, see :ref:`typecontextmanager`.


.. method:: object.__enter__(self)

   Enter the runtime context related to this object. The :keyword:`with` statement
   will bind this method's return value to the target(s) specified in the
   :keyword:`as` clause of the statement, if any.


.. method:: object.__exit__(self, exc_type, exc_value, traceback)

   Exit the runtime context related to this object. The parameters describe the
   exception that caused the context to be exited. If the context was exited
   without an exception, all three arguments will be :const:`None`.

   If an exception is supplied, and the method wishes to suppress the exception
   (i.e., prevent it from being propagated), it should return a true value.
   Otherwise, the exception will be processed normally upon exit from this method.

   Note that :meth:`__exit__` methods should not reraise the passed-in exception;
   this is the caller's responsibility.


.. seealso::

   :pep:`343` - The "with" statement
      The specification, background, and examples for the Python :keyword:`with`
      statement.


.. _special-lookup:

Special method lookup
---------------------

For custom classes, implicit invocations of special methods are only guaranteed
to work correctly if defined on an object's type, not in the object's instance
dictionary.  That behaviour is the reason why the following code raises an
exception::

   >>> class C:
   ...     pass
   ...
   >>> c = C()
   >>> c.__len__ = lambda: 5
   >>> len(c)
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: object of type 'C' has no len()

The rationale behind this behaviour lies with a number of special methods such
as :meth:`__hash__` and :meth:`__repr__` that are implemented by all objects,
including type objects. If the implicit lookup of these methods used the
conventional lookup process, they would fail when invoked on the type object
itself::

   >>> 1 .__hash__() == hash(1)
   True
   >>> int.__hash__() == hash(int)
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: descriptor '__hash__' of 'int' object needs an argument

Incorrectly attempting to invoke an unbound method of a class in this way is
sometimes referred to as 'metaclass confusion', and is avoided by bypassing
the instance when looking up special methods::

   >>> type(1).__hash__(1) == hash(1)
   True
   >>> type(int).__hash__(int) == hash(int)
   True

In addition to bypassing any instance attributes in the interest of
correctness, implicit special method lookup generally also bypasses the
:meth:`__getattribute__` method even of the object's metaclass::

   >>> class Meta(type):
   ...     def __getattribute__(*args):
   ...         print("Metaclass getattribute invoked")
   ...         return type.__getattribute__(*args)
   ...
   >>> class C(object, metaclass=Meta):
   ...     def __len__(self):
   ...         return 10
   ...     def __getattribute__(*args):
   ...         print("Class getattribute invoked")
   ...         return object.__getattribute__(*args)
   ...
   >>> c = C()
   >>> c.__len__()                 # Explicit lookup via instance
   Class getattribute invoked
   10
   >>> type(c).__len__(c)          # Explicit lookup via type
   Metaclass getattribute invoked
   10
   >>> len(c)                      # Implicit lookup
   10

Bypassing the :meth:`__getattribute__` machinery in this fashion
provides significant scope for speed optimisations within the
interpreter, at the cost of some flexibility in the handling of
special methods (the special method *must* be set on the class
object itself in order to be consistently invoked by the interpreter).

```
