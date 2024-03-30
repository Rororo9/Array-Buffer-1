import Magician from '../Magician.js';
import { Daemon_Character } from '../Daemon.js';

test('Атака Мага при расстоянии 1 должна быть 100', () => {
  const Magician_Character = new Magician(1, 100);
  const attack = Magician_Character.attack;
  expect(attack).toBe(100);
});

test('Атака Мага при расстоянии 2 должна быть 90', () => {
  const Magician_Character = new Magician(2, 100);
  const attack = Magician_Character.attack;
  expect(attack).toBe(90);
});

test('Атака Мага при расстоянии 4 должна быть 75', () => {
  const Magician_Character = new Magician(4, 100);
  const attack = Magician_Character.stoned;
  expect(attack).toBe(63);
});

test('Атака Демона должна быть 80', () => {
  const attack = Daemon_Character.attack;
  expect(attack).toBe(80);
});

test('Атака Демона должна быть 75', () => {
  const attack = Daemon_Character.stoned;
  expect(attack).toBe(75);
});

